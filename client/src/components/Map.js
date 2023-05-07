import { Text } from '@rneui/themed'
import { StyleSheet, View } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'

const Map = ({ location }) => {
  const points = []
  for (let i = 0; i <= 20; i++) {
    points.push({
      latitude: 52.408054 + i * 0.01,
      longitude: -1.510556 + i * 0.01,
    })
  }
  return (
    <View>
      {location ? (
        <MapView
          style={styles.map}
          userLocationUpdateInterval={5000}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Polyline coordinates={points} />
        </MapView>
      ) : (
        <MapView
          style={styles.map}
          // initialRegion={{
          //   latitude: location.latitude,
          //   longitude: location.longitude,
          //   latitudeDelta: 0.07,
          //   longitudeDelta: 0.08,
          // }}
        >
          <Polyline coordinates={points} />
        </MapView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: 400,
  },
})

export default Map
