// @flow

import { 
  Dimensions,
  Platform,
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
    height: // Magic numbers ... apparentyl this works! ¯\_(ツ)_/¯
      (Platform.OS === 'ios') ? height - 388 : 
      (Platform.OS === 'android') ? height - 403 :
      0,
    width: width - (12 * 2),
  },
  backdrop: {
    
  },
  text: {
    
  },
})
