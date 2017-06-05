// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  header: {
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: 'peachpuff',
  },
  list: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 72, // Magic numbers again!
  },
})
