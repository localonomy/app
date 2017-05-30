// @flow

import React, { Component } from 'react'
import { Text } from 'react-native'

import styles from './styles'

export default class Title extends Component {
  render() {
    return (
      <Text style={styles.welcome}>
        { this.props.children } from Android!
      </Text>
    )
  }
}
