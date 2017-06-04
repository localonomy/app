// @flow

import React from 'react'
import {
  View,
} from 'react-native'
import {
  Select,
  Option,
} from 'react-native-chooser'

import styles from './styles'

const DishPicker = ({ dishes, onSelect, style }) => (
  <View style={style}>
    <Select
      onSelect={onSelect}
      defaultText='Please select a dish'
      style={styles.picker}
      textStyle = {styles.text}
      backdropStyle = {styles.backdrop}
      optionListStyle = {styles.list}
      transparent={true}
    >
      {dishes.map((dish) => (
        <Option key={dish.id} value={dish.id}>
          {dish.name}
        </Option>
      ))}
    </Select>
  </View>
)

export default DishPicker
