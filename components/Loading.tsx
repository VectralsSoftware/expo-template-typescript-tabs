import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.spinner} size={'large'} color={Colors.light.primary}/>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      spinner: {
        alignSelf: 'center', 
        position: 'absolute',
      }
})