import { Button, Input } from '@rneui/themed'
import { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Context as LocationContext } from '../context/locationContext'

const TrackForm = () => {
  const {
    state: { name, isRecording, locations },
    startRecording,
    stopRecording,
    createTrackName,
  } = useContext(LocationContext)
  console.log(locations.length)
  return (
    <View style={styles.container}>
      <Input
        label='Track name'
        value={name}
        onChangeText={createTrackName}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Enter a Track name'
        inputContainerStyle={styles.inputStyle}
        inputStyle={styles.inputTextStyle}
        errorStyle={{ color: 'red', fontSize: 16 }}
        // errorMessage={state.emailErrorMessage}
      />
      <Button
        title={!isRecording ? 'Start Recording' : 'Stop Recording'}
        onPress={() => {
          isRecording ? stopRecording() : startRecording()
        }}
        buttonStyle={{
          backgroundColor: 'rgba(78, 116, 289, 1)',
          borderRadius: 4,
        }}
        titleStyle={{
          color: 'white',
          fontSize: 22,
          fontWeight: '300',
        }}
        containerStyle={{
          width: 180,
          alignSelf: 'center',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignSelf: 'center',
  },
  inputStyle: {
    backgroundColor: '#E8E9EB',
    borderRadius: 4,
    paddingLeft: 5,
    width: 240,
    // alignSelf: 'center'
  },
  inputTextStyle: {
    fontSize: 20,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
  },
})

export default TrackForm
