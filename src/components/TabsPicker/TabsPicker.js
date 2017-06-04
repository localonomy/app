// @flow

import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import CountryPicker from './../../components/CountryPicker'
import DishPicker from './../../components/DishPicker'
import Tab from './../../components/Tab'

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
      <View style={[styles.tabsPicker, this.props.style]}>
        <View style={styles.tabs}>
          <Tab
            style={styles.tabCountry}
            onPress={() => this.setState({ tab: 'country' })}
            selected ={this.state.tab === 'country'}
            text='By Country'
          />
          <Tab
            style={styles.tabDish}
            onPress={() => this.setState({ tab: 'dish' })}
            selected ={this.state.tab === 'dish'}
            text='By Dish Name'
          />
        </View>

        <View  style={styles.pickers}>
          {(this.state.tab === 'country') ?
            <CountryPicker
              countries={this.props.countries}
              onValueChange={this.props.onCountrySelect}
            /> : 
            <DishPicker />
          }
        </View>
      </View>
    )
  }
}
