// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
}) 
