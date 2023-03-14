import { useState } from "react";
import { View, Button, Text, TextInput, GestureResponderEvent } from "react-native";
import CustomTable from "./shared/CustomTable";

interface StaffInputsTypes {
    staffNumber: string,
    staffName: string,
    staffEmail: string,
    department: string,
    salary: number
};

const AddStaffProps: StaffInputsTypes = {
    staffNumber: "",
    staffName: "",
    staffEmail: "",
    department: "",
    salary: 0
};

export default function Staff() {
    const tableHead = ["Staff Number", "Staff Name", "Staff Email", "Department", "Salary"];
    const data = [["ZAM001", "Walter Kiprono", "walter@zamara.co.ke", "ICT", 90000],
    ["ZAM002", "Zeddy Jeru", "zeddy@zamara.co.ke", "HR", 80000]];

    return (
        <View>
            <CustomTable header={tableHead} data={data} />
        </View>
    );
}

function AddStaffWidget() {
    const [input, setInput] = useState(AddStaffProps);

    const handleAddStaff = (e: GestureResponderEvent) => { }

    return (
        <View>
            <Text>Staff Number</Text>
            <TextInput
                style={{ height: 10 }}
                placeholder="Enter Staff Number"
                defaultValue={input.staffNumber}
                onChangeText={txt => setInput({...input, staffNumber: txt})}
            />
            <Text>Staff Name</Text>
            <TextInput
                style={{ height: 10 }}
                placeholder="Enter Staff Name"
                defaultValue={input.staffName}
                onChangeText={txt => setInput({...input, staffName: txt})}
            />
            <Text>Staff Email</Text>
            <TextInput
                style={{ height: 10 }}
                placeholder="Enter Staff Email"
                defaultValue={input.staffEmail}
                onChangeText={txt => setInput({...input, staffEmail: txt})}
            />
            <Text>Department</Text>
            <TextInput
                style={{ height: 10 }}
                placeholder="Enter Department"
                defaultValue={input.department}
                onChangeText={txt => setInput({...input, department: txt})}
            />
            <Text>Salary</Text>
            <TextInput
                style={{ height: 10 }}
                placeholder="Enter Salary"
                defaultValue={input.salary + ""}
                onChangeText={txt => setInput({...input, salary: Number(txt)})}
            />
            <Button title="Login" onPress={handleAddStaff}></Button>
        </View>
    );
}