import { View, StyleSheet } from 'react-native'
import { Text, Button } from '@rneui/themed'
import { useContext } from 'react'
import { Context } from '../context/authContext'

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(Context)
  return (
    <View>
      <Text h4>Account Screen</Text>
      <Button
        title='Sign Out'
        onPress={() => signout(navigation)}
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

const styles = StyleSheet.create({})

export default AccountScreen
