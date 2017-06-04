// @flow

import React from 'react'
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

import styles from './styles'

const Tab = ({ onPress, selected, text, style }) => (
  <TouchableHighlight
    style={[styles.tab, style]}
    onPress={onPress}>
    <View
      style={[
        styles.button,
        selected && styles.buttonSelected
      ]}
    >
      <Text 
        style={[
          styles.text,
          selected && styles.textSelected
        ]}
      >
        {text}
      </Text>  
    </View>
  </TouchableHighlight>
)

export default Tab
