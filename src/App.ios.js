// @flow

import React from 'react'
import { StackNavigator } from 'react-navigation'

import store from './store'

import Home from './screens/Home'
import CountryDishes from './screens/CountryDishes'
import DishDetails from './screens/DishDetails'

store.init()

export default StackNavigator({
  Home: { screen: Home },
  CountryDishes: { screen: CountryDishes },
  DishDetails: { screen: DishDetails },
})
