import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountScreen from './src/screens/AccountScreen'
import CreateTrackScreen from './src/screens/CreateTrackScreen'
// import SigninScreen from './src/screens/SigninScreen'
// import SignupScreen from './src/screens/SignupScreen'
import StackNavigator from './src/navigation/StackNavigator'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomTabNavigator from './src/navigation/TabNavigator'
import TrackStackNavigator from './src/navigation/TrackStackNavigator'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}
