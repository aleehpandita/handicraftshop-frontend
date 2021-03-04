import * as config from '../config'

export async function getCategories () {
  // console.log(config.API_URL + config.API_VERSION)
  const res = await fetch(config.API_URL + config.API_VERSION + '/categories')
  const products = await res.json()
  if (!products) {
    return {
      notFound: true
    }
  }

  return products
}
