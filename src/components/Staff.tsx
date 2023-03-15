import { useEffect, useState } from "react";
import { View, Button, Text, TextInput, GestureResponderEvent, Modal, StyleSheet, Pressable, Alert } from "react-native";
import ApiService from "../service/api.service";
import CustomTable from "./shared/CustomTable";
import { AddStaffProps } from "./types/types";

export default function Staff() {
    const apiService = new ApiService();
    const [modalVisible, setModalVisible] = useState(false);
    const tableHead = ["Id", "Staff Number", "Staff Name", "Staff Email", "Department", "Salary"];
    const data = [[0, "ZAM001", "Walter Kiprono", "walter@zamara.co.ke", "ICT", 90000],
    [1, "ZAM002", "Zeddy Jeru", "zeddy@zamara.co.ke", "HR", 80000]];
    const [staffData, setStaffData] = useState(Array<string | number>);
    const [allStaff, setAllStaff] = useState(Array<Array<string|number>>);

    useEffect(() => { handleFetchStaff(); if(!modalVisible) setStaffData([])}, [modalVisible]);

    const handleFetchStaff = () => {
        apiService.fetchStaffApiService().then((response) => {
            if(response.length > 0) {
                // append to table
                let a: Array<any> = [];
                response.map((r) => {
                    a.push([r._id, r.staffName, r.staffEmail, r.department, r.salary]);
                });
                setAllStaff(a);
            }
        })
    };

    const handleRowClick = (data: Array<string | number>) => {
        if (data.length > 0) {
            setModalVisible(true);
            setStaffData(data);
        }
    };

    function AddStaffWidget() {
        const [input, setInput] = useState(AddStaffProps);

        const handleAddStaff = (e: GestureResponderEvent) => {
            apiService.addStaffApiService(input).then((response) => {
                if(response.isValid) {
                    Alert.alert("Success", response.message);
                    handleFetchStaff();
                } else {
                    Alert.alert("Error", response.message); 
                }
            });
        }

        return (
            <View>
                <Text>Staff Number</Text>
                <TextInput
                    placeholder="Enter Staff Number"
                    defaultValue={input.staffNumber}
                    onChangeText={txt => setInput({ ...input, staffNumber: txt })}
                />
                <Text>Staff Name</Text>
                <TextInput
                    placeholder="Enter Staff Name"
                    defaultValue={input.staffName}
                    onChangeText={txt => setInput({ ...input, staffName: txt })}
                />
                <Text>Staff Email</Text>
                <TextInput
                    placeholder="Enter Staff Email"
                    defaultValue={input.staffEmail}
                    onChangeText={txt => setInput({ ...input, staffEmail: txt })}
                />
                <Text>Department</Text>
                <TextInput
                    placeholder="Enter Department"
                    defaultValue={input.department}
                    onChangeText={txt => setInput({ ...input, department: txt })}
                />
                <Text>Salary</Text>
                <TextInput
                    placeholder="Enter Salary"
                    defaultValue={input.salary + ""}
                    onChangeText={txt => setInput({ ...input, salary: Number(txt) })}
                />
                <Button title="Save" onPress={handleAddStaff}></Button>
            </View>
        );
    }

    function EditStaffWidget() {
        const [input, setInput] = useState(AddStaffProps);

        useEffect(() => {
            setInput({ _id: staffData[0] + "", staffNumber: staffData[1] + "", staffName: staffData[2] + "", staffEmail: staffData[3] + "", department: staffData[4] + "", salary: Number(staffData[5]) })
        }, []);

        const handleEditStaff = (e: GestureResponderEvent) => {
            apiService.updateStaffApiService(input).then((response) => {
                if(response.isValid) {
                    Alert.alert("Success", response.message);
                    handleFetchStaff();
                } else {
                    Alert.alert("Error", response.message); 
                }
            });
        }

        const handleDeleteStaff = (e: GestureResponderEvent) => { 
            apiService.deleteStaffApiService(staffData[0] + "").then((response) => {
                if(response.isValid) {
                    Alert.alert("Success", response.message);
                    handleFetchStaff();
                } else {
                    Alert.alert("Error", response.message); 
                }
            });
        }

        return (
            <View>
                <Text>Staff Number</Text>
                <TextInput
                    placeholder="Enter Staff Number"
                    defaultValue={input.staffNumber}
                    onChangeText={txt => setInput({ ...input, staffNumber: txt })}
                />
                <Text>Staff Name</Text>
                <TextInput
                    placeholder="Enter Staff Name"
                    defaultValue={input.staffName}
                    onChangeText={txt => setInput({ ...input, staffName: txt })}
                />
                <Text>Staff Email</Text>
                <TextInput
                    placeholder="Enter Staff Email"
                    defaultValue={input.staffEmail}
                    onChangeText={txt => setInput({ ...input, staffEmail: txt })}
                />
                <Text>Department</Text>
                <TextInput
                    placeholder="Enter Department"
                    defaultValue={input.department}
                    onChangeText={txt => setInput({ ...input, department: txt })}
                />
                <Text>Salary</Text>
                <TextInput
                    placeholder="Enter Salary"
                    defaultValue={input.salary + ""}
                    onChangeText={txt => setInput({ ...input, salary: Number(txt) })}
                />
                <Button title="Edit" onPress={handleEditStaff}></Button>
                <Button title="Delete" onPress={handleDeleteStaff}></Button>
            </View>
        );
    }

    const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: 'center',
        },
        modalView: {
            // margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 80,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2,
        },
        buttonOpen: {
            backgroundColor: '#F194FF',
        },
        buttonClose: {
            backgroundColor: '#2196F3',
        },
        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
        },
    });

    return (
        <View>
            <Modal animationType="slide" visible={modalVisible} onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
                <View style={styles.centeredView}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                    <View style={styles.modalView}>
                        {
                            staffData.length > 0 ? <EditStaffWidget /> : <AddStaffWidget />
                        }
                    </View>
                </View>
            </Modal>
            <Button title="Add Staff" onPress={() => { setModalVisible(true) }} />
            <CustomTable header={tableHead} data={allStaff} onRowClick={(data) => handleRowClick(data)} />
        </View>
    );
}