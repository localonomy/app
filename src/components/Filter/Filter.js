// @flow

import React from 'react'
import {
  Image,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import config from './../../config'

import styles from './styles'

const Filter = ({ filter, disabled, onPress, style }) => (
  <TouchableWithoutFeedback style={[styles.filter]} onPress={onPress}>
    <View>
      <Image
        style={[styles.image, disabled && styles.disabled, style]}
        source={{
          uri: `${config.url}/img/filter/${filter}.png`,
          cache: 'force-cache',
        }}
      />
    </View>
  </TouchableWithoutFeedback>
)

export default Filter
