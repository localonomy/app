// @flow

import React from 'react'
import {
  Image,
  TouchableHighlight,
  View,
} from 'react-native'

import styles from './styles'

const DishDetailsFooter = ({ rate, onRatePress }) => (
  <View style={styles.footer}>
    <View style={styles.rate}>
      <TouchableHighlight
        style={[
          styles.tab,
          styles.tabDown,
          rate === -1 && styles.selectedDown
        ]}
        underlayColor={'ghostwhite'}
        onPress={onRatePress(-1)}
      >
        <View style={styles.button}>
          <Image style={styles.image} source={
            (rate === -1) ?
              require(`./../../images/down-selected.png`) :
              require(`./../../images/down.png`)
            }
          />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={[
          styles.tab,
          styles.tabUp,
          rate === 1 && styles.selectedUp
        ]}
        underlayColor={'ghostwhite'}
        onPress={onRatePress(1)}
      >
        <View style={[styles.button]}>
          <Image style={styles.image} source={
            (rate === 1) ?
              require(`./../../images/up-selected.png`) :
              require(`./../../images/up.png`) 
            }
          />
        </View>
      </TouchableHighlight>
    </View>
  </View>
)

export default DishDetailsFooter
