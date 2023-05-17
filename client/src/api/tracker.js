import axios from 'axios'
import { REACT_APP_BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
})

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

export default instance
