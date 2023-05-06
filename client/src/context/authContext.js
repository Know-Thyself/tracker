import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signup':
      return { errorMessage: '', token: action.payload }
    case 'custom-error':
      return {
        ...state,
        emailErrorMessage: action.payload.emailErrorMessage,
        passwordErrorMessage: action.payload.passwordErrorMessage,
        errorMessage: action.payload.errorMessage,
      }
    case 'signin':
      return { errorMessage: '', token: action.payload }
    case 'clear-error-msg':
      return {
        ...state,
        errorMessage: '',
        emailErrorMessage: '',
        passwordErrorMessage: '',
      }
    case 'signout':
      return { token: null }
    default:
      return state
  }
}

const clearErrorMsg = dispatch => {
  return () => {
    dispatch({ type: 'clear-error-msg' })
  }
}

const signup =
  dispatch =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password })
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: 'signup', payload: response.data.token })
    } catch (error) {
      console.log(error.message)
      let emailErrorMessage, passwordErrorMessage
      if (!email) emailErrorMessage = 'Email is required'
      if (!password) passwordErrorMessage = 'Password is required'
      dispatch({
        type: 'custom-error',
        payload: {
          emailErrorMessage,
          passwordErrorMessage,
          errorMessage: 'Something went wrong',
        },
      })
    }
  }

const signin = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signin', { email, password })
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: 'signin', payload: response.data.token })
    } catch (error) {
      console.log(error.message)
      dispatch({
        type: 'custom-error',
        payload: 'Something went wrong with sign in',
      })
    }
  }
}

const localSignin = dispatch => {
  return async navigation => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      dispatch({ type: 'signin', payload: token })
      navigation.navigate('Tracks List')
    } else {
      navigation.navigate('Sign Up')
    }
  }
}

const signout = dispatch => {
  return async nav => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout' })
    nav.navigate('Sign Up')
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMsg, localSignin },
  {
    token: null,
    errorMessage: '',
    emailErrorMessage: '',
    passwordErrorMessage: '',
  }
)
