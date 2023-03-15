import { View, Text, StyleSheet } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text>Welcome Walter Kiprono</Text>
                <Text>Your Profile Details Is As Below:</Text>
                <Text>Gender: Male</Text>
                <Text>Email: Walter@email.com</Text>
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