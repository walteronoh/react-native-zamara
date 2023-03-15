import { Link } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Session from "../service/session.service";

export default function Logout() {
    const session = new Session();
    useEffect(() => { session.clearSession() }, []);
    return (
        <View style={styles.centeredView}>
            <View style={styles.textView}>
                <Text style={styles.text}>You Have Been Logged Out.</Text>
                <Link style={styles.linkBtn} to="/Login">Go To Login.</Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    linkBtn: {
        padding: 14,
        backgroundColor: '#2196F3',
        borderRadius: 15
    }
});