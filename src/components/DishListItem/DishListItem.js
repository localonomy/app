// @flow

import React from 'react'
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

import config from './../../config'

import styles from './styles'

const DishListItem = ({ dish, onPress, style }) => (
  <TouchableHighlight style={[styles.item, style]} onPress={onPress}>
    <View>
      <Text style={styles.text}>{dish.name}</Text>
      <View style={styles.ingredients}>
        {dish.ingredients.map((ingredient, index) => (
          <Image
            key={`${dish.name}-${index}`}
            style={styles.ingredient}
            source={{
              uri: `${config.url}/img/ingredient/${ingredient}.png`,
              cache: 'force-cache'
            }}
          />
        ))}
      </View>
    </View>
  </TouchableHighlight>
)

export default DishListItem
