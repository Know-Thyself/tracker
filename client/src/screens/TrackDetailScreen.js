import { View, StyleSheet } from 'react-native'
import { Context as TrackContext } from '../context/trackContext'
import { useContext, useLayoutEffect } from 'react'
import MapView, { Polyline } from 'react-native-maps'

const TrackDetailScreen = ({ navigation, route }) => {
  const { _id } = route.params
  const { state } = useContext(TrackContext)
  const track = state.find(tr => tr._id === _id)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: track.name,
    })
  }, [navigation, track])
  
  return (
    <View style={styles.container}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})

export default TrackDetailScreen
