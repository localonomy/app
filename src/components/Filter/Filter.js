// @flow

import React from 'react'
import { Text } from 'react-native'

import styles from './styles'

const Filter = ({ filter, disabled, onPress }) => (
  <Text onPress={onPress}>
    {filter}
    {(disabled) ? ' - disabled' : ''}
  </Text>
)

export default Filter
