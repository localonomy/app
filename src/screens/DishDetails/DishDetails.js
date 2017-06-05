// @flow

import React, { Component } from 'react'
import {
  Button,
  Image,
  Text,
  View,
} from 'react-native'

import Ingredients from './../../components/Ingredients'

import config from './../../config'
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
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.left}>
            <Text style={styles.name}>{name}</Text>
            <Ingredients style={{
              ingredients: styles.ingredients,
              ingredient: styles.ingredient,
            }} dish={this.state} />
          </View>
          <Image style={styles.flag} source={{
            uri: `${config.url}/img/flag/${country.code}.png`,
            cache: 'force-cache',
          }}/>
        </View>

        <View style={styles.content}>
          <Text style={styles.description}>{description}</Text>
          <Image
            style={styles.picture}
            source={{
              uri: `${config.url}/img/dish/${name.toLowerCase()}.jpg`,
              cache: 'force-cache',
            }}
          />
        </View>

        <View style={styles.footer}>
          {(rate) ? <Text>{rate}</Text> : <Button title="Check-In" />}
        </View>
      </View>
    )
  }
}
