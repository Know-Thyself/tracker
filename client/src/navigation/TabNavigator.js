import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AccountScreen from '../screens/AccountScreen'
import CreateTrackScreen from '../screens/CreateTrackScreen'
import TrackStackNavigator from './TrackStackNavigator'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
}

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Signup'

  switch (routeName) {
    case 'list':
      return 'List'
    case 'detail':
      return 'Detail'
  }
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={(screenOptionStyle, { headerShown: false })}>
      <Tab.Screen
        name='Track Detail'
        component={TrackStackNavigator}
        options={
          (({ route }) => ({
            headerTitle: getHeaderTitle(route),
          }),
          { tabBarLabel: 'Tracks' })
        }
      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{ tabBarLabel: 'Account' }}
      />
      <Tab.Screen
        name='Create'
        component={CreateTrackScreen}
        options={{ tabBarLabel: 'Create' }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
