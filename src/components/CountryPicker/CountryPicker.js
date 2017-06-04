// @flow

import React from 'react'
import {
  Picker,
} from 'react-native'

import styles from './styles'

const CountryPicker = ({ countries, onValueChange }) => (
  <Picker
    style={styles.picker}
    onValueChange={onValueChange}
  > 
    <Picker.Item 
      style={styles.item} 
      key='' 
      label='Please select a country' 
      value='' 
    />
    
    {countries.map((country) => {
      return (
        <Picker.Item
          style={styles.item}
          key={country.id}
          label={country.name}
          value={country.code}
        />
      )
    })}
  </Picker>
)

export default CountryPicker
