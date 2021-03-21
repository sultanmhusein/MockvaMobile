import AsyncStorage from '@react-native-community/async-storage';

export const getCredential = async () => {
    return await AsyncStorage.getItem('credential');
}

export const setCredential = async (key) => {
    // console.log("SIMPAN", key)
    return await AsyncStorage.setItem('credential', key);
}

export const removeCredential = async () => {
    return await AsyncStorage.removeItem('credential');
}