// @flow

import React, { Component } from 'react'
import {
  FlatList,
  Image,
  Text,
  View,
} from 'react-native'

import store from './../../store'

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

  async componentDidMount() {
    let { country } = this.props.navigation.state.params

    let dishes = await store.get(`dishes-${country.code}`)

    /* -- TODO --
     * Filter the dishes depending on the filters selected.
     * We are doing this here so that the user can change filters even if
     * offline!
     * 
     */ 

    this.setState((prev) => ({
      ...prev,
      dishes,
    }))
  }

  render() {
    let { country } = this.props.navigation.state.params

    return (
      <View>
        <View>
          <Text>Local Dishes from {country.name}</Text>
          <Image
            style={{height:50, width: 50}}
            source={{
              uri: `http://localhost:3000/img/flag/${country.code}.png`,
              cache: 'force-cache',
            }}
          />
        </View>
        <View>
          <FlatList
            data={this.state.dishes}
            renderItem={({item}) => <Text key={item.id}>{item.name}</Text>}
          />
        </View>
      </View>
    )
  }
}
