// @flow

import { 
  Dimensions,
  StyleSheet,
} from 'react-native'

let { height, width } = Dimensions.get('window')

export default StyleSheet.create({
  picker: {
    borderColor: 'lightgrey',
    width: width - (12 * 2),
  },
  list: {
    backgroundColor : "#F5FCFF",
    borderColor: 'lightgrey',
    height: 230, // TODO - Magic numbers ...
    width: width - (12 * 2),
  },
  backdrop: {

  },
  text: {
    
  },
})
