// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 6,
    borderColor: 'black',
    borderBottomWidth: 1,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 1
    }
  },

  text: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
  },

  flag: {
    height: 36,
    width: 48,
    borderColor: 'black',
    borderWidth: 1,
  },
})
