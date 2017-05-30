// @flow

import ReactNativeStore from 'react-native-simple-store'

import api from './api'

const store = {
  async get(key) {
    let value

    // Try retrieving the value from local storage
    value = await ReactNativeStore.get(key)

    // Hit, retrieve from local storage
    if (value != null) {
      /* -- TODO --
       * Check the validity of the value with some mechanism to be defined!
       */

      // Return the value
      return new Promise((resolve, reject) => { resolve(value) })
    }

    // Miss, try retrieving the value from API
    else {
      // Try retrieving the value from API
      value = await api.get(key)

      // Save the value in local storage
      ReactNativeStore.save(key, value)

      // Return the value
      return new Promise((resolve, reject) => { resolve(value) })
    }
  }
}

export default store
