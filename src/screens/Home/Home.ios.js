// @flow

import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import store from './../../store'

import Filters from './../../components/Filters'
import TabsPicker from './../../components/TabsPicker'
import Title from './../../components/Title'

import styles from './styles'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Localonomy',
  }

  constructor(props) {
    super(props)

    this.onCountrySelect = this.onCountrySelect.bind(this)
    this.onFilterPress = this.onFilterPress.bind(this)

    this.state = {
      countries: [],
      filters: [],
      filtersDisabled: [],
    }
  }

  async componentDidMount() {
    let countries = await store.get('countries')
    let filters = await store.get('filters')
    let filtersDisabled = await store.get('filters-disabled')

    this.setState((prev) => ({
      ...prev,
      countries,
      filters,
      filtersDisabled,
    }))
  }

  onCountrySelect(code) {
    const { navigate } = this.props.navigation
    const { countries } = this.state

    navigate('CountryDishes', {
      country: countries.find((country) => country.code === code)
    })
  }

  onFilterPress(filter) {
    return async () => {
      let { filtersDisabled } = this.state

      if (filtersDisabled.includes(filter)) {
        filtersDisabled.splice(
          filtersDisabled.findIndex((f) => f === filter), 1
        )
      } else {
        filtersDisabled.push(filter)
      }

      await store.set('filters-disabled', filtersDisabled)

      this.setState((prev) => ({
        ...prev,
        filtersDisabled,
      }))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Title>Discover Local Delicacies!</Title>

        <TabsPicker
          countries={this.state.countries} 
          onCountrySelect={this.onCountrySelect} />

        <Filters
          filters={this.state.filters}
          filtersDisabled={this.state.filtersDisabled}
          onFilterPress={this.onFilterPress} />
      </View>
    )
  }
}
