import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = `${namespace}:token`;
  }

  async getAccessToken() {
    const rawToken = await AsyncStorage.getItem(this.namespace);
    return rawToken;
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(this.namespace, accessToken);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(this.namespace);
  }
}

export default AuthStorage;