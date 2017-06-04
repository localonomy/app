// @flow

import React, { Component } from 'react'
import {
  FlatList,
  Image,
  Text,
  View,
} from 'react-native'

import config from './../../config'
import store from './../../store'

import CountryHeader from './../../components/CountryHeader'
import DishList from './../../components/DishList'

import styles from './styles'

export default class CountryDishes extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Dishes from ${navigation.state.params.country.name}`
  })

  constructor(props) {
    super(props)

    this.onDishPress = this.onDishPress.bind(this)

    this.state = {
      dishes: [],
    }
  }

  async componentDidMount() {
    let { country } = this.props.navigation.state.params

    let dishes = await store.get(`dishes--${country.code}`)
    let filters = await store.get('filters-disabled')

    // Filter the dishes depending on the filters disabled.
    // We are doing this here so that the user can change filters even if
    // offline!
    dishes = dishes.filter((dish) =>
      dish.contains.every((f) => !filters.includes(f)))

    this.setState((prev) => ({
      ...prev,
      dishes,
    }))
  }

  onDishPress(country) {
    return (dish) => () => {
      const { navigate } = this.props.navigation

      navigate('DishDetails', { country, dish })
    }
  }

  render() {
    let { country } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <CountryHeader
          style={styles.header}
          name={country.name}
          flag={`${config.url}/img/flag/${country.code}.png`}
        />

        <DishList
          style={styles.list}
          dishes={this.state.dishes} 
          onDishPress={this.onDishPress(country)}
        />
      </View>
    )
  }
}
