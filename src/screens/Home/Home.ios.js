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
    this.onDishSelect = this.onDishSelect.bind(this)
    this.onFilterPress = this.onFilterPress.bind(this)

    this.state = {
      countries: [],
      dishes: [],
      filters: [],
      filtersDisabled: [],
    }
  }

  async componentDidMount() {
    let countries = await store.get('countries')
    let dishes = await store.get('dishes-names')
    let filters = await store.get('filters')
    let filtersDisabled = await store.get('filters-disabled')

    this.setState((prev) => ({
      ...prev,
      countries,
      dishes,
      filters,
      filtersDisabled,
    }))
  }

  onCountrySelect(code) {
    if (!code) return

    const { navigate } = this.props.navigation
    const { countries } = this.state

    navigate('CountryDishes', {
      country: countries.find((country) => country.code === code)
    })
  }

  onDishSelect(id) {
    if (!id) return

    const { navigate } = this.props.navigation
    const { countries, dishes } = this.state

    navigate('DishDetails', {
      dish: dishes.find((dish) => dish.id === id),
      country: countries.find((country) => country.code === id.slice(0, 2))
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
        <Title style={styles.title}>
          Discover Local Delicacies!
        </Title>

        <TabsPicker style={styles.tabs}
          countries={this.state.countries} 
          onCountrySelect={this.onCountrySelect}
          dishes={this.state.dishes} 
          onDishSelect={this.onDishSelect} />

        <Filters style={styles.filters}
          filters={this.state.filters}
          filtersDisabled={this.state.filtersDisabled}
          onFilterPress={this.onFilterPress} />
      </View>
    )
  }
}
