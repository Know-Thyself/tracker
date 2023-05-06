import { useContext, useEffect } from 'react'
import { Context } from '../context/authContext'

const ResolveAuthScreen = ({ navigation }) => {
  const { localSignin } = useContext(Context)
  useEffect(() => {
    localSignin(navigation)
  }, [])
  return null
}

export default ResolveAuthScreen
