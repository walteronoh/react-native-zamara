import { useState } from "react";
import { Button, View, Text, TextInput, GestureResponderEvent } from "react-native";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: GestureResponderEvent) => {}

    return (
        <View>
            <Text>Username</Text>
            <TextInput
                style={{ height: 10 }}
                placeholder="Enter Username"
                defaultValue={username}
                onChangeText={txt => setUsername(txt)}
            />
            <Text>Password</Text>
            <TextInput
                style={{ height: 10 }}
                placeholder="Enter Password"
                defaultValue={password}
                onChangeText={txt => setPassword(txt)}
            />
            <Button title="Login" onPress={handleLogin}></Button>
        </View>
    );
}