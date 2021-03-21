import AsyncStorage from '@react-native-community/async-storage';

export const getCredential = async () => {
    return await AsyncStorage.multiGet(["sessionId", "accountId"])
}

export const setCredential = async ([sessionId, account]) => {
    return await AsyncStorage.multiSet([["sessionId", sessionId], ["accountId", account]])
}

export const removeCredential = async () => {
    return await AsyncStorage.multiRemove(["sessionId", "accountId"])
}