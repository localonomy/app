// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  item: {
    paddingVertical: 18,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  name: {
    flex: 1,
  },
  text: {
    fontSize: 26,
    paddingBottom: 6,
  },

  rate: {
    width: 48,
    paddingLeft: 6,
  },
  image: {
    height: 36,
    width: 36,
  },
})
