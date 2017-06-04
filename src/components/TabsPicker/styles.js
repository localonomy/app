// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  tabsPicker: {
    flex: 1,
    flexDirection: 'column',
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    maxHeight : 36,
  },
  tabCountry: {
    borderTopLeftRadius: 12,
    borderRightWidth: 0,
  },
  tabDish: {
    borderTopRightRadius: 12,
  },
  pickers: {
    flex: 1,
  },
})
