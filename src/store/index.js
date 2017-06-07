// @flow

import ReactNativeStore from 'react-native-simple-store'

import api from './api'

const store = {
  async init() {
    let keys = ['filters-disabled', 'dishes-tasted']

    keys.forEach(async (key) => {
      let value = await ReactNativeStore.get(key)
      if (value == null) {
        await ReactNativeStore.save(key, [])
        await ReactNativeStore.save(
          `${key}-cache`,
          new Date(new Date().getTime() + (36500 * 86400000)).toString() //100 years
        )
      }
    })
  },

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
      try {
        // Try retrieving the value from API
        value = await api.get(key)

        // Save the value in local storage
        await ReactNativeStore.save(key, value)
        await ReactNativeStore.save(
          `${key}-cache`,
          new Date(new Date().getTime() + (7 * 86400000)).toString() // 7 days
        )
      } catch (err) {
        // If the request to the API fails, just retrieve from cache
        // even though it might not still be valid
        value = await ReactNativeStore.get(key)
      }
    }

    // Return the value or an error if the value is null
    return new Promise((resolve, reject) => {
      if (value != null) {
        resolve(value)
      } else {
        reject()
      }
    })
  },

  async set(key, value) {
    await ReactNativeStore.save(key, value)
    await ReactNativeStore.save(
      `${key}-cache`,
      new Date(new Date().getTime() + (36500 * 86400000)).toString() //100 years
    )

    return new Promise((resolve) => { resolve(value) })
  }
}

export default store
