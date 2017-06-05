// @flow

import React from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'

import styles from './styles'

const DishDetailsFooter = ({ rate }) => (
  <View style={styles.footer}>
    {(rate) ?
      <Text>{rate}</Text> :
      <Button title="Check-In" />
    }
  </View>
)

export default DishDetailsFooter
