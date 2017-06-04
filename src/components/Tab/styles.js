// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  tab: {
    flex: 1,
    height: 36,
    backgroundColor: 'peachpuff',
    borderColor: 'grey',
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  selected: {
    backgroundColor: 'chocolate',
  },

  button: {
    padding: 6,
  },

  text: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  textSelected: {
    color: 'white',
  },
})
