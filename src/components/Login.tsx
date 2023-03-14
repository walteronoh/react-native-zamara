import { useState } from "react";
import { Button, View, Text, TextInput, GestureResponderEvent, StyleSheet, Alert } from "react-native";
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { CompositeNavigationProp, NavigationContainer, useNavigation } from '@react-navigation/native';
import { Icon } from "react-native-elements";
import ApiService from "../service/api.service";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DashboardDrawerParamList, RootStackParamList } from "./types/types";

// type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
type DashboardProp = CompositeNavigationProp<NativeStackNavigationProp<RootStackParamList>, DrawerNavigationProp<DashboardDrawerParamList>>;

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation<DashboardProp>();
    const apiService = new ApiService();

    const handleLogin = (e: GestureResponderEvent) => {
        // username: 'kminchelle',
        // password: '0lelplR',
        apiService.loginApiService({username:'kminchelle', password:'0lelplR'}).then((r) => {
            if(r.isValid) {
                Alert.alert('Success', r.message + ". You will be redirected to dashboard.");
                navigation.navigate("Dashboard");
            } else {
                Alert.alert('Error', r.message);
            }
        })
     }

    return (
        <View style={styles.container}>
            <View style={styles.inputs}>
                <Icon name="user" type="font-awesome" /><Text>Username</Text>
            </View>
            <TextInput
                placeholder="Enter Username"
                defaultValue={username}
                onChangeText={txt => setUsername(txt)}
            />
            <View style={styles.inputs}>
                <Icon name="lock" type="font-awesome" /><Text>Password</Text>
            </View>
            <TextInput
                placeholder="Enter Password"
                defaultValue={password}
                onChangeText={txt => setPassword(txt)}
            />
            <Button title="Login" onPress={handleLogin}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ecf0f1',
    },
    inputs: {
        flexDirection: "row",
    }
});