// @flow

import React, { Component } from 'react'
import {
  Button,
  Image,
  Text,
  View,
} from 'react-native'

import DishDetailsHeader from './../../components/DishDetailsHeader'
import DishDetailsContent from './../../components/DishDetailsContent'
import DishDetailsFooter from './../../components/DishDetailsFooter'

import config from './../../config'
import store from './../../store'

import styles from './styles'

export default class DishDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.dish.name}`
  })

  constructor(props) {
    super(props)

    this.onRatePress = this.onRatePress.bind(this)

    let { dish } = this.props.navigation.state.params
    let { country } = this.props.navigation.state.params

    dish.country = country
    this.state = dish
  }

  async componentDidMount() {
    let dish = await store.get(`dish--${this.state.id}`)
    let dishesTasted = await store.get(`dishes-tasted`)

    let tasted = dishesTasted.find((d) => d.id === dish.id)
    dish.rate = tasted && tasted.rate

    this.setState((prev) => ({ ...prev, ...dish, }))
  }

  onRatePress(rate) {
    return async () => {
      let dish = this.state
      dish.rate = rate

      let dishesTasted = await store.get(`dishes-tasted`)
      dishesTasted.push(dish)
      await store.set(`dishes-tasted`, dishesTasted)

      this.setState((prev) => ({ ...prev, ...dish }))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <DishDetailsHeader
          dish={this.state}
          flag={`${config.url}/img/flag/${this.state.country.code}.png`}
        />

        <DishDetailsContent
          description={this.state.description}
          picture={`${config.url}/img/dish/${this.state.picture}`}
        />

        <DishDetailsFooter
          rate={this.state.rate}
          onRatePress={this.onRatePress}
        />
      </View>
    )
  }
}
