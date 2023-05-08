import { Button, Input } from '@rneui/themed'
import { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Context as LocationContext } from '../context/locationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
  const {
    state: { name, isRecording, locations },
    startRecording,
    stopRecording,
    createTrackName,
  } = useContext(LocationContext)
  console.log(locations.length)
  const [saveTrack] = useSaveTrack()
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
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        containerStyle={styles.buttonContainer}
      />
      {!isRecording && locations.length ? (
        <Button
          title='Save Track'
          onPress={saveTrack}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          containerStyle={styles.buttonContainer}
        />
      ) : null}
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
  button: {
    backgroundColor: 'rgba(78, 116, 289, 1)',
    borderRadius: 4,
    marginBottom: 10,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '300',
  },
  buttonContainer: {
    width: 180,
    alignSelf: 'center',
  },
})

export default TrackForm
