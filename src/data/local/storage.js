import AsyncStorage from '@react-native-community/async-storage';

export const getCredential = async () => {
    return await AsyncStorage.getItem('credential');
}

export const setCredential = async (key) => {
    return await AsyncStorage.setItem('credential', key);
}

export const removeCredential = async () => {
    return await AsyncStorage.removeItem('credential');
}

// export const getAccountId = async () => {
//     return await AsyncStorage.getItem('accId');
// }

// export const setAccountId = async (key) => {
//     return await AsyncStorage.setItem('accId', key);
// }

// export const removeAccountId = async () => {
//     return  await AsyncStorage.removeItem('accId');
// }