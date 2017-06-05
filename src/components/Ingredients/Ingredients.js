// @flow

import React from 'react'
import {
  Image,
  View,
} from 'react-native'

import config from './../../config'

import styles from './styles'

const Ingredients = ({ dish, style }) => (
  <View style={[styles.ingredients, style && style.ingredients]}>
    {dish.ingredients && dish.ingredients.map((ingredient, index) => (
      <Image
        key={`${dish.name}-${index}`}
        style={[styles.ingredient, style && style.ingredient]}
        source={{
          uri: `${config.url}/img/ingredient/${ingredient}.png`,
          cache: 'force-cache'
        }}
      />
    ))}
  </View>
)

export default Ingredients
