import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { ListItem } from '@rneui/themed'
import { Context as TrackContext } from '../context/trackContext'
import React, { useContext, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

const TrackListScreen = ({ navigation }) => {
  const { state, getTracks } = useContext(TrackContext)

  useFocusEffect(
    useCallback(() => {
      let isActive = true
      const fetchTracks = async () => {
        try {
          await getTracks()
        } catch (e) {
          console.error(e)
        }
      }
      if (isActive) {
        fetchTracks()
      }
      return () => {
        isActive = false
      }
    }, [])
  )

  return (
    <View>
      <Text style={styles.text}>Your Recorded List of Tracks</Text>
      {state.length ? (
        <FlatList
          data={state}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('detail', {
                    _id: item._id,
                    name: item.name,
                  })
                }
              >
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Title>
                      {item.name}
                      <ListItem.Chevron />
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              </TouchableOpacity>
            )
          }}
        />
      ) : (
        <Text style={styles.text}>Loading ....</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 16,
  },
})

export default TrackListScreen
