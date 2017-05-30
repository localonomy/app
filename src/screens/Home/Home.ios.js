// @flow

import React, { Component } from 'react'
import { View } from 'react-native'

import store from './../../store'

import Text from './../../components/Text'
import Title from './../../components/Title'

import styles from './styles'

export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      countries: [],
      filters: [],
    }
  }

  async componentDidMount() {
    let countries = await store.get('countries')
    let filters = await store.get('filters')

    this.setState({
      countries,
      filters,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Filters: {this.state.filters[0]}, {this.state.filters[1]}, {this.state.filters[2]}
        </Text>
        <Text>
          Countries: {this.state.countries[0] && this.state.countries[0].name}, {this.state.countries[1] && this.state.countries[1].name}, {this.state.countries[2] && this.state.countries[2].name}
        </Text>
      </View>
    )
  }
}
