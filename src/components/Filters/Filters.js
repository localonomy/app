// @flow

import React, { Component } from 'react'
import {
  View,
} from 'react-native'

import Filter from './../Filter'

import styles from './styles'

const Filters = ({ filters, filtersDisabled, onFilterPress, style }) => (
  <View style={[styles.filters, style]}>
    {filters.map((filter) => (
      <Filter
        style={styles.filter}
        key={filter}
        disabled={filtersDisabled.includes(filter)}
        filter={filter}
        onPress={onFilterPress(filter)} />
      )
    )}
  </View>
)

export default Filters
