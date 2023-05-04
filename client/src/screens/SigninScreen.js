import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Form, FormItem } from 'react-native-form-component'

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const inputRef = React.createRef()

  return (
    <View style={styles.formContainer}>
      <Form
        buttonText={'Sign In'}
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        onButtonPress={() => navigation.navigate('Sign Up')}
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
})

export default SigninScreen
