// @flow

import config from './config'

import badges from './data/badges.json'
import filters from './data/filters.json'

const get = async (key) => {
  switch (key) {
    case 'filters':
      return new Promise((resolve, reject) => { resolve(filters) })
      break

    case 'badges':
      return new Promise((resolve, reject) => { resolve(badges) })
      break
  
    case 'countries':
      let response = await fetch(`${config.url}/api/countries`)
      return response.json()
      break

    default:
      break
  }
}

export default { get, }
