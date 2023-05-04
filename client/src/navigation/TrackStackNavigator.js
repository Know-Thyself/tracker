import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TrackListScreen from '../screens/TrackListScreen'
import TrackDetailScreen from '../screens/TrackDetailScreen'

const Stack = createNativeStackNavigator()

const TrackStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='list'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='list' component={TrackListScreen} />
      <Stack.Screen name='detail' component={TrackDetailScreen} />
    </Stack.Navigator>
  )
}

export default TrackStackNavigator
