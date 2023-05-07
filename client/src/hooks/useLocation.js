import { useEffect, useState } from 'react'
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location'
// import * as Location from 'expo-location'

export default (isActive, callback) => {
  const [err, setErr] = useState()
  const [subscriber, setSubscriber] = useState(null)
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync()
      console.log(granted, '<==== granted')
      // alternative methods
      // const response = await Location.getForegroundPermissionsAsync()
      // console.log(response, '<==== response')
      // let coords = await Location.getCurrentPositionAsync()
      // console.log(coords, '<========LOCATION')
      const subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      )
      setSubscriber(subscriber)
      if (!granted) {
        throw new Error('Location permission not granted')
      }
    } catch (e) {
      setErr(e)
    }
  }

  useEffect(() => {
    if (isActive) {
      startWatching()
		} else {
			subscriber.remove()
			setSubscriber(null)
		}
  }, [isActive])

  return [err]
}
