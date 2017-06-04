// @flow

import React from 'react'
import {
  Image,
  TouchableOpacity,
} from 'react-native'

import config from './../../config'

import styles from './styles'

const Filter = ({ filter, disabled, onPress, style }) => (
  <TouchableOpacity style={[styles.filter]} onPress={onPress}>
    <Image
      style={[styles.image, disabled && styles.disabled, style]}
      source={{
        uri: `${config.url}/img/filter/${filter}.png`,
        cache: 'force-cache',
      }}
    />
  </TouchableOpacity>
)

export default Filter
