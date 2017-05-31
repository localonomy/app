// @flow

import ReactNativeStore from 'react-native-simple-store'

import api from './api'

const store = {
  async get(key) {
    let value

    let cacheValidUntil = await ReactNativeStore.get(`${key}-cache`)
    let isCacheValid = cacheValidUntil && new Date() < new Date(cacheValidUntil)

    // Hit, retrieve from local storage
    if (isCacheValid) {
      // Try retrieving the value from local storage
      value = await ReactNativeStore.get(key)  
    }
 
    // Miss, try retrieving the value from API
    else {
      // Try retrieving the value from API
      value = await api.get(key)

      // Save the value in local storage
      ReactNativeStore.save(key, value)
      ReactNativeStore.save(
        `${key}-cache`,
        new Date(new Date().getTime() + (27 * 86400000)).toString() // 27 days
      )
    }

    // Return the value
    return new Promise((resolve, reject) => { resolve(value) })
  }
}

export default store
