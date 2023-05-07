import '../_mockLocations'
import { View, StyleSheet } from 'react-native'
import Map from '../components/Map'
import { Text } from '@rneui/themed'
import { useContext } from 'react'
import { Context as LocationContext } from '../context/locationContext'
import useLocation from '../hooks/useLocation'

const CreateTrackScreen = () => {
  const { addNewLocation } = useContext(LocationContext)
  const [err] = useLocation(addNewLocation)
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
