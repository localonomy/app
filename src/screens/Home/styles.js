// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  title: {
    marginTop: 36,
    marginLeft: 12,
    marginRight: 12,
  },
  tabs: {
    top: 12,
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
  },
  filters: {
    marginTop: -288, // Magic numbers everywhere ...
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 36,
  },
})
