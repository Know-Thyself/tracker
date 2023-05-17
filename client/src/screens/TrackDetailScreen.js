import { View, Text, StyleSheet, Button } from 'react-native'
import { Context as TrackContext } from '../context/trackContext'
import { useContext } from 'react'
import MapView, { Polyline } from 'react-native-maps'

const TrackDetailScreen = ({ navigation, route }) => {
  const { _id } = route.params
  const { state } = useContext(TrackContext)
  const track = state.find(tr => tr._id === _id)
  return (
    <View style={styles.container}>
      <Text style={styles.trackName}>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...track.locations[0].coords,
        }}
        style={styles.map}
      >
        <Polyline
          coordinates={track.locations.map(location => location.coords)}
        />
      </MapView>
      <Button
        title='Go to Track List'
        onPress={() => navigation.navigate('list')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trackName: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})

export default TrackDetailScreen
