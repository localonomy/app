// @flow

import {
  Platform,
  StyleSheet,
} from 'react-native'

export default StyleSheet.create({
  tabsPicker: {
    flexDirection: 'column',
  },
  tabs: {
    flexDirection: 'row',
  },
  tabCountry: {
    borderTopLeftRadius: 12,
    borderRightWidth: 0,
  },
  tabDish: {
    borderTopRightRadius: 12,
  },
  pickers: {
    marginTop: // Little hack ... there's an extra pixel on Android!
      (Platform.OS === 'ios') ? 0 : 
      (Platform.OS === 'android') ? -1 :
      0,
  },
})
