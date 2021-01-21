import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(nameSuffix = 'auth') {
    this.namespace = `${nameSuffix}:token`;
  }

  async getAccessToken() {
    try {
      const token = await AsyncStorage.getItem(this.namespace);
      if (token !== null) return await token;
    } catch (error) {
      console.log(error);
    }
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(this.namespace, accessToken);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(this.namespace);
  }
}

export default AuthStorage;