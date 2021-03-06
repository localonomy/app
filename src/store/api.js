// @flow

import config from './../config'

const get = async (key) => {
  let id, response

  [key, id] = key.split('--')
  switch (key) {
    case 'filters':
      response = await fetch(`${config.url}/api/filters`)
      return response.json()
  
    case 'countries':
      response = await fetch(`${config.url}/api/countries`)
      return response.json()

    case 'dishes-names':
      response = await fetch(`${config.url}/api/dishes`)
      return response.json()

    case 'dishes':
      response = await fetch(`${config.url}/api/dishes/${id}`)
      return response.json()

    case 'dish':
      response = await fetch(`${config.url}/api/dish/${id}`)
      return response.json()

    default:
      break
  }
}

export default { get, }
