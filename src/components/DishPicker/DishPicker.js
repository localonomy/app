// @flow

import React from 'react'
import {
  TextInput,
} from 'react-native'

import styles from './styles'

const DishPicker= () => (
  <TextInput
    style={{height: 60}}
    placeholder='Please type a dish name'
    returnKeyType='go'
  />
)

export default DishPicker
