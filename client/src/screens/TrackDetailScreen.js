import { View, Text, StyleSheet, Button } from 'react-native'

const TrackDetailScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Track Detail Screen</Text>
      <Button
        title='Go to Track List'
        onPress={() => navigation.navigate('list')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default TrackDetailScreen
