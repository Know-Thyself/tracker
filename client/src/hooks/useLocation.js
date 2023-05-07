import { useEffect, useState } from 'react'
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location'
// import * as Location from 'expo-location'

export default (callback) => {
  const [err, setErr] = useState()
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync()
      console.log(granted, '<==== granted')
      // alternative methods
      // const response = await Location.getForegroundPermissionsAsync()
      // console.log(response, '<==== response')
      // let coords = await Location.getCurrentPositionAsync()
      // console.log(coords, '<========LOCATION')
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      )
      if (!granted) {
        throw new Error('Location permission not granted')
      }
    } catch (e) {
      setErr(e)
    }
  }

  useEffect(() => {
    startWatching()
  }, [])

	return [err]
}
