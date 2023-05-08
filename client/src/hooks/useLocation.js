import { useEffect, useState } from 'react'
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location'

export default (isActive, callback) => {
  const [err, setErr] = useState()

  useEffect(() => {
    let subscriber
    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync()
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 3000,
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
    if (isActive) {
      startWatching()
    } else {
      subscriber = null
    }
    return () => {
      if (subscriber) {
        subscriber.remove()
      }
    }
  }, [isActive, callback])

  return [err]
}
