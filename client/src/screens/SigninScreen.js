import React, { useState, useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import { Form, FormItem } from 'react-native-form-component'
import { Context } from '../context/authContext'

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMsg } = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const inputRef = React.createRef()

  useEffect(() => {
    const clearError = () => {
      clearErrorMsg()
    }
    return clearError
  }, [navigation])

  return (
    <View style={styles.formContainer}>
      <Form
        buttonText={'Sign In'}
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        onButtonPress={() => {
          signin({ email, password })
          if (state.token) {
            navigation.navigate('Tracks List')
          }
        }}
      >
        <FormItem
          label='Email'
          isRequired
          value={email}
          onChangeText={email => setEmail(email)}
          ref={inputRef}
          asterik
        />
        <FormItem
          label='Password'
          isRequired
          value={password}
          onChangeText={password => setPassword(password)}
          ref={inputRef}
          asterik
        />
      </Form>
      <Button
        title='Go to main page'
        onPress={() => navigation.navigate('Tracks List', { screen: 'list' })}
      />
      <View style={styles.buttonTextWrapper}>
        <Text style={styles.textStyle}>Don't have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Sign Up')}>
          <Text style={styles.buttonText}>Sign Up </Text>
        </Pressable>
        <Text style={styles.textStyle}>first</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    width: '70%',
    alignSelf: 'center',
    marginTop: 20,
  },
  header: {
    fontSize: 22,
  },
  buttonStyle: {
    width: 120,
    alignSelf: 'center',
    backgroundColor: 'rgba(78, 116, 289, 1)',
  },
  buttonTextStyle: {
    fontSize: 18,
    fontWeight: '600',
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

export default SigninScreen
