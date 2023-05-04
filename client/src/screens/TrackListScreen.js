import { View, Text, StyleSheet, Button } from 'react-native'

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Track List Screen</Text>
      <Button
        title='View Details'
        onPress={() => navigation.navigate('detail')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default TrackListScreen
