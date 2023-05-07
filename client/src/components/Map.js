import { useContext } from 'react'
import { Text } from '@rneui/themed'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/locationContext'

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext)

  return (
    <View>
      {currentLocation ? (
        <MapView
          style={styles.map}
          initialRegion={{
            // latitude: currentLocation.coords.latitude,
            // longitude: currentLocation.coords.longitude,
            ...currentLocation.coords,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{
            ...currentLocation.coords,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Circle
            center={currentLocation.coords}
            radius={180}
            strokeColor='orange'
            fillColor='rgba(158,158,255, 0.4)'
          />
        </MapView>
      ) : (
        <View style={styles.activityContainer}>
          <ActivityIndicator size='large' />
          <Text style={styles.loading}>Loading...</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  loading: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
  },
  map: {
    height: 400,
  },
})

export default Map
