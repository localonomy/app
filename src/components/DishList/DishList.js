// @flow

import React from 'react'
import {
  FlatList,
  Text,
  View,
} from 'react-native'

import DishListItem from './../DishListItem'

import styles from './styles'

const DishList = ({ dishes, onDishPress }) => (
  <View>
    <FlatList
      data={dishes}
      renderItem={({item}) => (
        <DishListItem
          key={item.id}
          onPress={onDishPress(item)}
          dish={item}
        />
      )}
    />
  </View>
)

export default DishList
