import { Link } from "@react-navigation/native";
import { View, Button, Text, StyleSheet } from "react-native";

export default function Logout() {
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