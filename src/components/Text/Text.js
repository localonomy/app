// @flow

import React, { Component } from 'react'
import { Text as ReactNativeText } from 'react-native'

import styles from './styles'

export default class Text extends Component {
  render() {
    return (
      <ReactNativeText style={styles.instructions}>
        { this.props.children }
      </ReactNativeText>
    )
  }
}
