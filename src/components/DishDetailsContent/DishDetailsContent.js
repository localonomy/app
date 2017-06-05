// @flow

import React from 'react'
import {
  Image,
  Text,
  View
} from 'react-native'

import styles from './styles'

const DishDetailsContent = ({ description, picture }) => (
  <View style={styles.content}>
    <Text style={styles.description}>
      {description}
    </Text>
    <Image 
      style={styles.picture} 
      source={{ uri: picture, cache: 'force-cache' }} 
    />
  </View>
)

export default DishDetailsContent
