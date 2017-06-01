// @flow

import React from 'react'
import { StackNavigator } from 'react-navigation'

import Home from './screens/Home'
import DishList from './screens/DishList'

export default StackNavigator({
  Home: { screen: Home },
  DishList: { screen: DishList },
})
