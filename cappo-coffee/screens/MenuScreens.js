import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MenuScreens({navigation}) {
  return (
    <View>
      <Text>MenuScreens</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Menu') }>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}