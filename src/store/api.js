// @flow

const get = async (key) => {
  switch (key) {
    case 'filters':
      return new Promise((resolve, reject) => { resolve(['meat', 'spicy', 'gluten']) })
      break
  
    case 'countries':
      let response = await fetch(`http://localhost:3000/api/countries`)
      return response.json()
      break

    default:
      break
  }
}

export default { get, }
