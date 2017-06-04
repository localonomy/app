// @flow

import React from 'react'
import {
  Image,
  Text,
  View,
} from 'react-native'

import styles from './styles'

const CountryHeader = ({ name, flag }) => (
  <View>
    <Text>Local Dishes from {name}</Text>
    <Image
      style={{height:50, width: 50}}
      source={{ uri: flag, cache: 'force-cache' }}
    />
  </View>
)

export default CountryHeader
