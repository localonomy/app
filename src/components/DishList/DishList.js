// @flow

import React from 'react'
import {
  FlatList,
  Text,
  View,
} from 'react-native'

import DishListItem from './../DishListItem'

import styles from './styles'

const DishList = ({ dishes, onDishPress, style }) => (
  <View style={[styles.container, style]}>
    <FlatList
      style={styles.list}
      data={dishes}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <DishListItem
          onPress={onDishPress(item)}
          dish={item}
        />
      )}
      ItemSeparatorComponent={() => (<View style={styles.separator} />)}
    />
  </View>
)

export default DishList
