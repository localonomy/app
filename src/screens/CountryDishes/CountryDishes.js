// @flow

import React, { Component } from 'react'
import { View } from 'react-native'

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
    this.updateDishRating = this.updateDishRating.bind(this)

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

    // Add rating info for tasted dishes
    let dishesTasted = await store.get(`dishes-tasted`)
    dishes.forEach((dish) => {
      let tasted = dishesTasted.find((d) => d.id === dish.id) 
      dish.rate = tasted && tasted.rate
    })

    this.setState((prev) => ({
      ...prev,
      dishes,
    }))
  }

  onDishPress(country) {
    return (dish) => () => {
      const { navigate } = this.props.navigation

      navigate('DishDetails', {
        country,
        dish,
        updateDishRating: this.updateDishRating(dish)
      })
    }
  }

  // Just a litte hack to pass the state back to this screen.
  // Yes, we could use Redux for this ... but let's fight that urge for
  // just a little bit longer shall we? :D
  updateDishRating(dish) {
    return (rate) => {
      let { dishes } = this.state
      let index = dishes.findIndex((d) => d.id === dish.id)
      dishes[index].rate = rate

      this.setState((prev) => ({ ...prev, dishes, }))
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
