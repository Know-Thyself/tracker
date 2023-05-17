import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ResolveAuthScreen from '../screens/ResolveAuthScreen'
import SignupScreen from '../screens/SignupScreen'
import SigninScreen from '../screens/SigninScreen'
import BottomTabNavigator from './TabNavigator'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
  headerShown: false,
  headerBackVisible: false,
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
}

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Signup'

  switch (routeName) {
    case 'Tracks':
      return 'Tracks'
    case 'Account':
      return 'Account'
    case 'Create':
      return 'Create'
  }
}

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      options={({ route }) => ({ title: route.params.name })}
    >
      <Stack.Screen name='Auto Sign In' component={ResolveAuthScreen} />
      <Stack.Screen
        name='Sign Up'
        component={SignupScreen}
        options={{ title: 'Sign Up 4 Tracker' }}
      />
      <Stack.Screen name='Sign In' component={SigninScreen} />
      <Stack.Screen
        name='Create Track'
        component={BottomTabNavigator}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
