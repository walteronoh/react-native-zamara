import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Session {
    async setSession(firstName: string, lastName: string, email: string, gender: string) {
        await AsyncStorage.setItem("FullName", firstName + " " + lastName);
        await AsyncStorage.setItem("Email", email);
        await AsyncStorage.setItem("Gender", gender);
    }

    async getSession() {
        return {
        FullName: await AsyncStorage.getItem("FullName") + "",
        Email: await AsyncStorage.getItem("Email") + "",
        Gender: await AsyncStorage.getItem("Gender") + ""
        }
    }

    async clearSession() {
        await AsyncStorage.clear();
    }
}