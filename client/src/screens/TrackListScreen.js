import {
  View,
  Text,
  StyleSheet,
  Button,
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
      const fetchTracks = async () => {
        try {
          await getTracks()
        } catch (e) {
          console.error(e)
        }
      }
      fetchTracks()
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
                onPress={() => navigation.navigate('detail', { _id: item._id })}
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
      <Button
        title='View Details'
        onPress={() => navigation.navigate('detail', { name: 'Track Detail' })}
      />
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
