import '../_mockLocations'
import { View, StyleSheet } from 'react-native'
import Map from '../components/Map'
import { Text } from '@rneui/themed'
import React, { useContext, useState } from 'react'
import { Context as LocationContext } from '../context/locationContext'
import useLocation from '../hooks/useLocation'
import { useFocusEffect } from '@react-navigation/native'
import TrackForm from '../components/TrackForm'

const CreateTrackScreen = ({ navigation }) => {
  const {
    state: { isRecording },
    addNewLocation,
  } = useContext(LocationContext)
  const [isActive, setIsActive] = useState(true)
  const callback = React.useCallback(
    location => {
      addNewLocation(location, isRecording)
    },
    [isRecording]
  )
  const [err] = useLocation(isActive || isRecording, callback)

  useFocusEffect(
    React.useCallback(() => {
      setIsActive(true)
      return () => {
        setIsActive(false)
      }
    }, [navigation])
  )

  return (
    <View>
      {/* <Text h3 style={styles.text}>
        Creat a Track
      </Text> */}
      <Map />
      {err ? (
        <Text style={{ color: 'red', fontSize: 16 }}>
          Please allow the tracker to access your location
        </Text>
      ) : null}
      <TrackForm />
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
