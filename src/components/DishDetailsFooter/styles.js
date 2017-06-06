// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  footer: {
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
    height: 48,
  },

  rate: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignContent: 'stretch', 
  },
  tab: {
    flex: 1,
    height: 48,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  tabDown: {
    borderRightWidth: 0,
  },
  tabUp: {
    borderLeftWidth: 0,
  },
  selectedDown: {
    backgroundColor: 'crimson',
  },
  selectedUp: {
    backgroundColor: 'forestgreen',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 24,
    width: 24,
  },
})
