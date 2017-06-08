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
    style={[
      styles.tab,
      selected && styles.selected,
      style
    ]}
    underlayColor={'chocolate'}
    onPress={onPress}
  >
    <View style={[styles.button]}>
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
