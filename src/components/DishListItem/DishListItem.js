// @flow

import React from 'react'
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

import Ingredients from './../Ingredients'

import config from './../../config'

import styles from './styles'

const DishListItem = ({ dish, onPress, style }) => (
  <TouchableHighlight 
    style={[styles.item, style]}
    underlayColor={'ghostwhite'}
    onPress={onPress}
  >
    <View>
      <Text style={styles.text}>{dish.name}</Text>
      <Ingredients dish={dish} />
    </View>
  </TouchableHighlight>
)

export default DishListItem
