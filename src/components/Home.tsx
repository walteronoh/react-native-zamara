import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Session from "../service/session.service";

export default function Home() {
    const session = new Session();
    const [userInfo, setUserInfo] = useState({ FullName: "", Email: "", Gender: "", Phone: "", BirthDate: "", BloodGroup: "", Height: "", Weight: "", EyeColor: ""});

    useEffect(() => {
        handleScreenLoad();
    }, []);

    const handleScreenLoad = async () => {
        const s = await session.getSession();
        setUserInfo(s);
    }
    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text>Welcome {userInfo.FullName}</Text>
                <Text>Your Profile Details Is As Below:</Text>
                <Text>Gender: {userInfo.Gender}</Text>
                <Text>Email: {userInfo.Email}</Text>
                <Text>Phone: {userInfo.Phone}</Text>
                <Text>BirthDate: {userInfo.BirthDate}</Text>
                <Text>BloodGroup: {userInfo.BloodGroup}</Text>
                <Text>Height: {userInfo.Height}</Text>
                <Text>Weight: {userInfo.Weight}</Text>
                <Text>EyeColor: {userInfo.EyeColor}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
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
        padding: 50,
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
});