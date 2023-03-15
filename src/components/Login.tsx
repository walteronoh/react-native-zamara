import { useState } from "react";
import { Button, View, Text, TextInput, GestureResponderEvent, StyleSheet, Alert, Pressable } from "react-native";
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
        apiService.loginApiService({ username: username, password: password}).then((r) => {
            if (r.isValid) {
                Alert.alert('Success', r.message + ". You will be redirected to dashboard.");
                navigation.navigate("Dashboard");
            } else {
                Alert.alert('Error', r.message);
            }
        })
    }

    return (
        <View style={styles.centeredView}>
            <View style={styles.textView}>
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
                <Pressable
                    style={[styles.loginBtn]}
                    onPress={(e) => handleLogin(e)}>
                    <Text style={styles.textStyle}>Login</Text>
                </Pressable>
            </View>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: "bold"
    },
    textView: {
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
    loginBtn: {
        width: 170,
        padding: 15,
        backgroundColor: '#2196F3',
        borderRadius: 15
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});