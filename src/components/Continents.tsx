import { useEffect, useState } from "react";
import { View, Button } from "react-native";
import ApiService from "../service/api.service";
import CustomTable from "./shared/CustomTable";

export default function Continents() {
    const apiService = new ApiService();
    const [continents, setContinents] = useState(Array<Array<string|number>>);
    const tableHead = ["Continent Code", "Continent Name"];

    useEffect(() => {
        apiService.continentsApiService().then((response) => {
            if(response.length > 0) {
                // append to table
                let a: Array<any> = [];
                response.map((r) => {
                    a.push([r.sCode, r.sName]);
                });
                setContinents(a);
            }
        });
    }, []);
    return (
        <View>
            <CustomTable header={tableHead} data={continents} />
        </View>
    );
}