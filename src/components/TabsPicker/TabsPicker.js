// @flow

import React, { Component } from 'react'
import { 
  Text,
  View,
} from 'react-native'

import Tabs from 'react-native-tabs'

import CountryPicker from './../../components/CountryPicker'
import DishPicker from './../../components/DishPicker'

import styles from './styles'

export default class TabsPicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tab: 'country'
    }
  }

  render() {
    return (
      <View>
        <Tabs
          selected={this.state.tab}
          onSelect={(el) => { this.setState({ tab: el.props.name }) }}
        >
          <Text name='country'>By Country</Text>
          <Text name='dish'>By Dish Name</Text>
        </Tabs>
        
        {(this.state.tab === 'country') ?
          <CountryPicker
            countries={this.props.countries}
            onValueChange={this.props.onCountrySelect}
          /> : 
          <DishPicker />
        }
      </View>
    )
  }
}
