// @flow

import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import styles from './styles'

export default class DishList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Dishes from ${navigation.state.params.country.name}`
  })

  constructor(props) {
    super(props)

    this.state = {
      dishes: [],
    }
  }

  render() {
    let { country } = this.props.navigation.state.params

    return (
      <View>
        <Text>Dishes from {country.name}</Text>
        <Text>{country.code}</Text>
      </View>
    )
  }
}
