import { AsyncStorage} from 'react-native'

class localStorage {
    items = {}

    async getItem(item) {
        return await AsyncStorage.getItem(item); 
    }

    async setItem(item, value) {
        await AsyncStorage.setItem(item, value);
    }

    async removeItem(item) {
        await AsyncStorage.removeItem(item);
    }
}

export default new localStorage();
