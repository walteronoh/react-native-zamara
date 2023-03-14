import { View, TouchableOpacity, Text } from "react-native";
import { Table, Row, Rows, TableWrapper, Cell } from "react-native-table-component";

interface CustomTableProps {
    header: Array<string>
    data: Array<Array<string | number>>,
    hasDeleteBtn?: boolean,
    hasUpdateBtn?: boolean
}

export default function CustomTable(props: CustomTableProps) {
    const handleUpdate = (key: string | number) => { };

    const handleDelete = (key: string | number) => { };

    const UpdateBtn = (data: string | number, index: number) => (
        <TouchableOpacity key={index} onPress={() => handleUpdate(data)}>
            <View>
                <Text>Update</Text>
            </View>
        </TouchableOpacity>
    );

    const DeleteBtn = (data: string | number, index: number) => (
        <TouchableOpacity key={index} onPress={() => handleDelete(data)}>
            <View>
                <Text>Delete</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                <Row data={props.header} />
                {
                    props.data.map((rowData, index) => (
                        <TableWrapper key={index}>
                            {
                                rowData.map((cellData, cellIndex) => (
                                    <Cell key={cellIndex} data={props.hasUpdateBtn ? UpdateBtn : cellData} />
                                ))
                            }
                        </TableWrapper>
                    ))
                }
                <Rows data={props.data} />
            </Table>
        </View>
    );
}