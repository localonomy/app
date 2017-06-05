// @flow

import React from 'react'
import {
  Image,
  Text,
  View,
} from 'react-native'

import Ingredients from './../Ingredients'

import styles from './styles'

const DishDetailsHeader = ({ dish, flag }) => (
  <View style={styles.header}>
    <View style={styles.left}>
      <Text style={styles.name}>{dish.name}</Text>
      <Ingredients dish={dish} style={{
        ingredients: styles.ingredients,
        ingredient: styles.ingredient,
      }} />
    </View>
    <Image style={styles.flag} source={{ uri: flag, cache: 'force-cache' }} />
  </View>
)

export default DishDetailsHeader
