// @flow

import React from 'react'
import {
  Image,
  Text,
  View,
} from 'react-native'

import styles from './styles'

const CountryHeader = ({ name, flag, style }) => (
  <View style={[styles.header, style]}>
    <View style={styles.text}>
      <Text style={styles.subtitle}>Local Dishes from</Text>
      <Text style={styles.title}>{name}</Text>
    </View>
    <Image style={styles.flag} source={{ uri: flag, cache: 'force-cache' }} />
  </View>
)

export default CountryHeader
