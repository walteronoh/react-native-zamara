import { useEffect, useState } from "react";
import { View, Button, Text, TextInput, GestureResponderEvent, Modal, StyleSheet, Pressable, Alert } from "react-native";
import ApiService from "../service/api.service";
import CustomTable from "./shared/CustomTable";
import { AddStaffProps } from "./types/types";

export default function Staff() {
    const apiService = new ApiService();
    const [modalVisible, setModalVisible] = useState(false);
    const tableHead = ["Staff Number", "Staff Name", "Staff Email", "Department", "Salary"];
    const data = [["ZAM001", "Walter Kiprono", "walter@zamara.co.ke", "ICT", 90000],
    ["ZAM002", "Zeddy Jeru", "zeddy@zamara.co.ke", "HR", 80000]];

    useEffect(() => {}, []);

    function AddStaffWidget() {
        const [input, setInput] = useState(AddStaffProps);
    
        const handleAddStaff = (e: GestureResponderEvent) => { 
            apiService.sendEmailService();
            // apiService.addStaffApiService(input).then((response) => {
            //     if(response.isValid) {
            //         Alert.alert("Success", response.message);
            //     } else {
            //         Alert.alert("Error", response.message); 
            //     }
            // });
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
                        <AddStaffWidget />
                    </View>
                </View>
            </Modal>
            <Button title="Add Staff" onPress={() => { setModalVisible(true) }} />
            <CustomTable header={tableHead} data={data} />
        </View>
    );
}