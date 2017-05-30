// @flow

import React, { Component } from 'react'
import { View } from 'react-native'

import Text from './../../components/Text'
import Title from './../../components/Title'

import styles from './styles'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title>
          Welcome to Localonomy!
        </Title>
        <Text>
          To get started, edit index.ios.js
        </Text>
        <Text>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
}
