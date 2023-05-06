import { View, StyleSheet, Pressable } from 'react-native'
import { Text, Input, Button } from '@rneui/themed'
import { useState, useContext, useEffect } from 'react'
import { Context as AuthContext } from '../context/authContext'

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMsg } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const clearError = () => {
      clearErrorMsg()
    }
    return clearError
  }, [navigation])
  return (
    <View style={styles.formContainer}>
      <Input
        label='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Enter a valid email'
        inputContainerStyle={styles.inputStyle}
        inputStyle={styles.inputTextStyle}
        errorStyle={{ color: 'red', fontSize: 16 }}
        errorMessage={state.emailErrorMessage}
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      />
      <Input
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        inputContainerStyle={styles.inputStyle}
        inputStyle={styles.inputTextStyle}
        leftIcon={{ type: 'font-awesome', name: 'key' }}
        secureTextEntry={true}
        errorStyle={{ color: 'red', fontSize: 16 }}
        errorMessage={state.passwordErrorMessage}
      />
      {state.errorMessage && (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      )}
      <Button
        // size='md'
        title='Sign up'
        onPress={() => {
          signup({ email, password })
          if (state.token) {
            setEmail('')
            setPassword('')
            navigation.navigate('Sign In')
          }
        }}
        buttonStyle={{
          backgroundColor: 'rgba(78, 116, 289, 1)',
          borderRadius: 4,
        }}
        titleStyle={{
          color: 'white',
          fontSize: 22,
          fontWeight: '300',
        }}
        containerStyle={{
          width: 120,
          marginVertical: 10,
          alignSelf: 'center',
        }}
      />
      <View style={styles.buttonTextWrapper}>
        <Text style={styles.textStyle}>Already have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Sign In')}>
          <Text style={styles.buttonText}>Sign In </Text>
        </Pressable>
        <Text style={styles.textStyle}>instead</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    // gap: 5,
  },
  header: {
    textAlign: 'center',
    marginVertical: 10,
  },
  inputStyle: {
    backgroundColor: '#DCDCDC',
    borderRadius: 4,
    paddingLeft: 5,
  },
  inputTextStyle: {
    fontSize: 20,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 10,
  },
  buttonTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 24,
  },
  buttonText: {
    color: 'rgb(78, 116, 289)',
    fontSize: 18,
    fontWeight: 500,
  },
  textStyle: {
    fontSize: 18,
  },
})

export default SignupScreen
