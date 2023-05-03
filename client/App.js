import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountScreen from './src/screens/AccountScreen'
import CreateTrackScreen from './src/screens/CreateTrackScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Create Track' component={CreateTrackScreen} />
      <Tab.Screen name='Account' component={AccountScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#BEBEBE',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='signup'
          component={SignupScreen}
          options={{ title: 'Please Sign Up' }}
        />
        <Stack.Screen
          name='Add'
          component={SigninScreen}
          options={{ title: 'Please Sign In' }}
        />
      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name='Create Track' component={CreateTrackScreen} />
        <Tab.Screen name='Account' component={AccountScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>
  )
}
