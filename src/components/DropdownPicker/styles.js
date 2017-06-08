// @flow

import { 
  Dimensions,
  StyleSheet,
} from 'react-native'

let { height, width } = Dimensions.get('window')

export default StyleSheet.create({
  picker: {
    borderColor: 'grey',
    width: width - (12 * 2),
  },
  list: {
    backgroundColor : '#F5FCFF',
    borderColor: 'grey',
    height: height - 388, // Magic numbers ... apparentyl this works! ¯\_(ツ)_/¯
    width: width - (12 * 2),
  },
  backdrop: {
    
  },
  text: {
    
  },
})
