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

const DropdownPicker = ({ data, defaultText, tab, onSelect, style }) => (
  <View style={style}>
    <Select
      onSelect={onSelect}
      defaultText={defaultText}
      style={styles.picker}
      textStyle = {styles.text}
      backdropStyle = {styles.backdrop}
      optionListStyle = {styles.list}
      transparent={true}
    >
      {data.map((item) => (
        <Option key={item.id} value={item.id}>
          {item.name}
        </Option>
      ))}
    </Select>
  </View>
)

export default DropdownPicker
