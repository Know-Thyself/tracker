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
  const { state, addNewLocation } = useContext(LocationContext)
  const [isActive, setIsActive] = useState(true)
  const [err] = useLocation(isActive, location => {
    addNewLocation(location, state.isRecording)
  })

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
      <Text h3 style={styles.text}>
        Creat a Track
      </Text>
      <Map />
      {err ? (
        <Text style={{ color: 'red', fontSize: 16 }}>
          Please allow the tracker
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
