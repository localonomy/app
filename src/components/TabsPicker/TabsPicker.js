// @flow

import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import DropdownPicker from './../../components/DropdownPicker'
import Tab from './../../components/Tab'

import styles from './styles'

const TabsPicker = ({
  tab, onTabPress,
  countries, onCountrySelect,
  dishes, onDishSelect,
  style
}) => (
  <View style={[styles.tabsPicker, style]}>
    <View style={styles.tabs}>
      <Tab style={styles.tabCountry}
        onPress={onTabPress('country')}
        selected ={tab === 'country'}
        text='By Country'
      />
      <Tab style={styles.tabDish}
        onPress={onTabPress('dish')}
        selected ={tab === 'dish'}
        text='By Dish Name'
      />
    </View>

    <View style={styles.pickers}>
      {(tab === 'country') ?
        <DropdownPicker
          key='country'
          data={countries}
          defaultText='Please select a country ...'
          onSelect={onCountrySelect}
        /> : 
        <DropdownPicker
          key='dish'
          data={dishes}
          defaultText='Please select a dish ...'
          onSelect={onDishSelect}
        />
      }
    </View>
  </View>
)

export default TabsPicker
