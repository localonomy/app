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
    height: // Magic numbers ...
      (height === 667) ? 279 : // iPhone 6 - iPhone 6s - iPhone 7
      (height === 736) ? 348 : // iPhone 6 Plus - iPhone 6s Plus - iPhone 7 Plus
      300, // This could be just about anything ¯\_(ツ)_/¯
    width: width - (12 * 2),
  },
  backdrop: {
    
  },
  text: {
    
  },
})
