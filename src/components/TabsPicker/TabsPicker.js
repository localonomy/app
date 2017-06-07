// @flow

import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import DropdownPicker from './../../components/DropdownPicker'
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
            <DropdownPicker
              key='country'
              data={this.props.countries}
              defaultText='Please select a country ...'
              onSelect={this.props.onCountrySelect}
            /> : 
            <DropdownPicker
              key='dish'
              data={this.props.dishes}
              defaultText='Please select a dish ...'
              onSelect={this.props.onDishSelect}
            />
          }
        </View>
      </View>
    )
  }
}
