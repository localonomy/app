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
        onPress={onRatePress(-1)}
      >
        <View style={styles.button}>
          <Image style={styles.image} source={(rate === -1) ? require(`./img/down-selected.png`) : require(`./img/down.png`) 
          } />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={[
          styles.tab,
          styles.tabUp,
          rate === 1 && styles.selectedUp
        ]}
        onPress={onRatePress(1)}
      >
        <View style={[styles.button]}>
          <Image style={styles.image} source={ (rate === 1) ? require(`./img/up-selected.png`) : require(`./img/up.png`) 
          } />
        </View>
      </TouchableHighlight>
    </View>
  </View>
)

export default DishDetailsFooter
