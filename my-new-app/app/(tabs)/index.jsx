import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

import icedCoffeeImg from "@/assets/images/iced-coffee.png"

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={icedCoffeeImg}
      resizeMode='cover'
      style={styles.image}>
        <Text style={styles.text}>
          Coffee Shop!
        </Text>
      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
  },
  image:{
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text:{
    color:"black",
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})