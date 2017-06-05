// @flow

import React from 'react'
import {
  Image,
  View,
} from 'react-native'

import config from './../../config'

import styles from './styles'

const Ingredients = ({ dish }) => (
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
)

export default Ingredients
