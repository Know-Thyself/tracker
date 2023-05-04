import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from '@rneui/themed'
import { useState } from 'react'

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.formContainer}>
      <Text style={styles.header} h4>
        Sign Up for Tracker
      </Text>
      <Input
        label='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalixe='none'
        autoCorrect={false}
        inputContainerStyle={styles.inputStyle}
        inputStyle={styles.inputTextStyle}
        errorStyle={{ color: 'red' }}
        errorMessage='Enter a valid Email'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      />
      <Input
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalixe='none'
        autoCorrect={false}
        inputContainerStyle={styles.inputStyle}
        inputStyle={styles.inputTextStyle}
        leftIcon={{ type: 'font-awesome', name: 'key' }}
        secureTextEntry={true}
        errorStyle={{ color: 'red' }}
        errorMessage='Incorrect password'
      />
      <Button
        // size='md'
        title='Sign up'
        onPress={() => navigation.navigate('Sign In')}
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
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    width: '90%',
    alignSelf: 'center',
    gap: 10,
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
})

export default SignupScreen
