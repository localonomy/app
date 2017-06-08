// @flow

import React from 'react'
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

import Ingredients from './../Ingredients'

import styles from './styles'

const DishListItem = ({ dish, onPress, style }) => (
  <TouchableHighlight 
    style={[styles.item, style]}
    underlayColor={'ghostwhite'}
    onPress={onPress}
  >
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={styles.text}>{dish.name}</Text>
        <Ingredients dish={dish} />
      </View>
      <View style={styles.rate}>
        {(dish.rate) ? <Image style={styles.image} source={
            (dish.rate === 1) ? require(`./../../images/up.png`) :
            (dish.rate === -1) ? require(`./../../images/down.png`) :
            ``
          } /> : <Text></Text> }
      </View>
    </View>
  </TouchableHighlight>
)

export default DishListItem
