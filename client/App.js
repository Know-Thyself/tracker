import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigation/StackNavigator'
import { Provider as AuthProvider } from './src/context/authContext'
import { Provider as LocationProvider } from './src/context/locationContext'
import { Provider as TrackProvider } from './src/context/trackContext'

export default function App() {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
}
