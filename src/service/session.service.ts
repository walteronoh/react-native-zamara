import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Session {
    async setSession(firstName: string, lastName: string, email: string, gender: string) {
        await AsyncStorage.setItem("FullName", firstName + " " + lastName);
        await AsyncStorage.setItem("Email", email);
        await AsyncStorage.setItem("Gender", gender);
        await AsyncStorage.setItem("Phone", " ");
        await AsyncStorage.setItem("BirthDate", " ");
        await AsyncStorage.setItem("BloodGroup", " ");
        await AsyncStorage.setItem("Height", " ");
        await AsyncStorage.setItem("Weight", " ");
        await AsyncStorage.setItem("EyeColor", " ");
    }

    async getSession() {
        return {
        FullName: await AsyncStorage.getItem("FullName") + "",
        Email: await AsyncStorage.getItem("Email") + "",
        Gender: await AsyncStorage.getItem("Gender") + "",
        Phone: await AsyncStorage.getItem("Phone") + "",
        BirthDate: await AsyncStorage.getItem("BirthDate") + "",
        BloodGroup: await AsyncStorage.getItem("BloodGroup") + "",
        Height: await AsyncStorage.getItem("Height") + "",
        Weight: await AsyncStorage.getItem("Weight") + "",
        EyeColor: await AsyncStorage.getItem("EyeColor") + "",
        }
    }

    async clearSession() {
        await AsyncStorage.clear();
    }
}