import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AccountScreen from '../screens/AccountScreen'
import CreateTrackScreen from '../screens/CreateTrackScreen'
import TrackStackNavigator from './TrackStackNavigator'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerShown: false,
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
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen
        name='Create a Track'
        component={CreateTrackScreen}
        options={{
          tabBarLabel: 'Add Track',
          title: 'Create a Track',
          tabBarIcon: () => (
            <Ionicons name='add-circle-outline' size={32} color='blue' />
          ),
        }}
      />
      <Tab.Screen
        name='Track List'
        component={TrackStackNavigator}
        options={{
          tabBarLabel: 'Tracks',
          tabBarIcon: () => (
            <FontAwesome5 name='th-list' size={28} color='blue' />
          ),
        }}
      />

      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name='account-circle'
              size={32}
              color='blue'
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
