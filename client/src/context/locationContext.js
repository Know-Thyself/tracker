import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_name':
      return { ...state, name: action.payload }
    case 'add_current_location':
      return { ...state, currentLocation: action.payload }
    case 'add_location':
      return { ...state, locations: [...state.locations, action.payload] }
    case 'start_recording':
      return {
        ...state,
        isRecording: true,
      }
    case 'stop_recording':
      return { ...state, isRecording: false }
    default:
      return state
  }
}

const createTrackName = dispatch => name => {
  dispatch({ type: 'add_name', payload: name })
}

const startRecording = dispatch => () => {
  dispatch({ type: 'start_recording' })
}
const stopRecording = dispatch => () => {
  dispatch({ type: 'stop_recording' })
}
const addNewLocation = dispatch => (location, isRecording) => {
  dispatch({ type: 'add_current_location', payload: location })
  if (isRecording) dispatch({ type: 'add_location', payload: location })
}

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addNewLocation, createTrackName },
  { name: '', isRecording: false, locations: [], currentLocation: null }
)
