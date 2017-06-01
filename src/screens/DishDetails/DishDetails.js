// @flow

import React, { Component } from 'react'
import {
  Button,
  Image,
  Text,
  View,
} from 'react-native'

import store from './../../store'

import styles from './styles'

export default class DishDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.dish.name}`
  })

  constructor(props) {
    super(props)

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

  render() {
    const {
      id,
      name,
      ingredients,
      description,
      picture,
      rate,
      country,
    } = this.state
    
    return (
      <View>
        <Text>{name}</Text>
        <Text>{country.name} - {country.code}</Text>

        <Text>{description}</Text>
        <Image
          style={{height:50, width: 50}}
          source={{
            uri: `http://localhost:3000/img/dish/${name.toLowerCase()}.jpg`,
            cache: 'force-cache',
          }}
        />

        {(rate) ? <Text>{rate}</Text> : <Button title="Check-In" />}
      </View>
    )
  }
}
