// @flow

import React from 'react'
import { StackNavigator } from 'react-navigation'

import store from './store'

import Home from './screens/Home'
import DishList from './screens/DishList'

store.init()

export default StackNavigator({
  Home: { screen: Home },
  DishList: { screen: DishList },
})
