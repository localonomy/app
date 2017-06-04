// @flow

import React from 'react'
import { Text } from 'react-native'

import styles from './styles'

const DishListItem = ({ dish, onPress }) => (
  <Text onPress={onPress}>
    {dish.name}
  </Text>
)

export default DishListItem
