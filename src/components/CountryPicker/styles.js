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
    backgroundColor : "#F5FCFF",
    borderColor: 'grey',
    height: (279/667) * height, // TODO - Magic numbers ...
    width: width - (12 * 2),
  },
  backdrop: {

  },
  text: {
    
  },
})
