// @flow

import {
  Dimensions,
  StyleSheet,
} from 'react-native'

let { width } = Dimensions.get('window')

export default StyleSheet.create({
  filters: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    alignItems: 'center',
  },
  filter: {
    width: width / 3 - 36,
    height: width / 3 - 36,
  },
})
