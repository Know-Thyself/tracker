import { View, StyleSheet } from 'react-native'
import Map from '../components/Map'
import { Text } from '@rneui/themed'
import * as Location from 'expo-location'
import { requestForegroundPermissionsAsync } from 'expo-location'
import { useEffect, useState } from 'react'

const CreateTrackScreen = () => {
  const [status, requestPermission] = Location.useForegroundPermissions()
  const [err, setErr] = useState(null)
  const [location, setLocation] = useState({})

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync()
      // const {granted} = await requestPermission()
      console.log(granted, '<==== granted')
      const response = await Location.getForegroundPermissionsAsync()
      // const response = await requestPermission()
      console.log(response, '<==== response')
      let coords = await Location.getCurrentPositionAsync()
      setLocation(coords.coords)
      console.log(coords, '<========LOCATION')
      if (!granted) {
        throw new Error('Location permission not granted')
      }
    } catch (e) {
      setErr(e)
    }
  }

  useEffect(() => {
    startWatching()
    console.log(status, '<============== status')
  }, [])
  return (
    <View>
      <Text h3 style={styles.text}>
        Creat a Track
      </Text>
      <Map location={location} />
      {err ? (
        <Text style={{ color: 'red', fontSize: 16 }}>
          Please allow the tracker
        </Text>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    marginVertical: 10,
  },
})

export default CreateTrackScreen
