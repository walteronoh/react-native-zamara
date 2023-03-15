import { View, TouchableOpacity, Text } from "react-native";
import { Table, Row, Rows, TableWrapper, Cell } from "react-native-table-component";

interface CustomTableProps {
    header: Array<string>
    data: Array<Array<string | number>>,
    onRowClick?: (data:Array<string | number>) => void
}

export default function CustomTable(props: CustomTableProps) {
    return (
        <View>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                <Row data={props.header} />
                {
                    props.data.map((rowData, index) => (
                        <TouchableOpacity key={index} onPress={() => props?.onRowClick?.(rowData)}>
                            <Row
                                key={index}
                                data={rowData}
                            />
                        </TouchableOpacity>
                    ))
                }
            </Table>
        </View>
    );
}