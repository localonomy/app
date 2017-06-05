// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
  },
  left: {
    flex: 1,
    flexDirection: 'column'    
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  ingredients: {
    marginLeft: -6, // ahem ...
  },
  ingredient: {
    height: 16,
    width: 16,
  },
  flag: {
    height: 36,
    width: 48,
    borderColor: 'black',
    borderWidth: 1,
  },

  content: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
  },
  description: {
    marginBottom: 12,
    fontSize: 16,
  },
  picture: {
    flex: 1,
  },

  footer: {
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
  },
})
