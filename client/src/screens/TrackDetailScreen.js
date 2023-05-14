import { View, Text, StyleSheet, Button } from 'react-native'
import { Context as TrackContext } from '../context/trackContext'
import { useContext } from 'react'

const TrackDetailScreen = ({ navigation, route }) => {
  const { _id } = route.params
  const { state } = useContext(TrackContext)
  const track = state.find(tr => tr._id === _id)
  return (
    <View>
      <Text>Track Detail Screen</Text>
      <Text>{track.name}</Text>
      <Button
        title='Go to Track List'
        onPress={() => navigation.navigate('list')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default TrackDetailScreen
