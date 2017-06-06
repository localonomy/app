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
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={styles.text}>{dish.name}</Text>
        <Ingredients dish={dish} />
      </View>
      <View style={styles.rate}>
        {(dish.rate) ? <Image style={styles.image} source={
            (dish.rate === 1) ? require(`./img/up.png`) :
            (dish.rate === -1) ? require(`./img/down.png`) : ``
          } /> : <Text></Text> }
      </View>
    </View>
  </TouchableHighlight>
)

export default DishListItem
