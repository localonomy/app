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

const CountryPicker = ({ countries, onSelect, style }) => (
  <View style={style}>
    <Select
      onSelect={onSelect}
      defaultText='Please select a country'
      style={styles.picker}
      textStyle = {styles.text}
      backdropStyle = {styles.backdrop}
      optionListStyle = {styles.list}
      transparent={true}
    >
      {countries.map((country) => (
        <Option key={country.id} value={country.code}>
          {country.name}
        </Option>
      ))}
    </Select>
  </View>
)

export default CountryPicker
