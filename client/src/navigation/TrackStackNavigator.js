import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TrackListScreen from '../screens/TrackListScreen'
import TrackDetailScreen from '../screens/TrackDetailScreen'

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
  headerShown: true,
  headerBackVisible: true,
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  title: 'Tracks List',
}

const TrackStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='list' screenOptions={screenOptionStyle}>
      <Stack.Screen name='list' component={TrackListScreen} />
      <Stack.Screen
        name='detail'
        component={TrackDetailScreen}
        options={{ title: 'Track Details' }}
      />
    </Stack.Navigator>
  )
}

export default TrackStackNavigator
