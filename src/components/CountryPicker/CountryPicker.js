// @flow

import React from 'react'
import {
  Picker,
} from 'react-native'

import styles from './styles'

const CountryPicker = ({ countries, onValueChange }) => (
  <Picker
    style={{width: 500}}
    onValueChange={onValueChange}>
    <Picker.Item label='Please select a country' value='' />
    {countries.map((country) => {
      return (
        <Picker.Item
          key={country.id}
          label={country.name}
          value={country.code}
        />
      )
    })}
  </Picker>
)

export default CountryPicker
