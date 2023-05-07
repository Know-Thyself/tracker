import { View, StyleSheet } from 'react-native'
import { Text, Button } from '@rneui/themed'
import { useContext } from 'react'
import { Context } from '../context/authContext'

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(Context)
  return (
    <View style={styles.container}>
      <Text h4 style={styles.header}>
        Thanks for using our app!
      </Text>
      <Text style={styles.text}>
        You are currently signed in. You can explore the app by using the bottom
        tab navigation or sign out by just clicking the button below
      </Text>
      <Button
        title='Sign Out'
        onPress={() => signout(navigation)}
        buttonStyle={{
          backgroundColor: 'rgba(78, 116, 289, 1)',
          borderRadius: 4,
        }}
        titleStyle={{
          color: 'white',
          fontSize: 20,
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
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 10,
  },
})

export default AccountScreen
