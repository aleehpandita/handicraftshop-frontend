import * as config from '../config'

export async function getCategories () {
  const res = await fetch(config.API_URL + config.API_VERSION + '/categories')
  const products = await res.json()
  if (!products) {
    return {
      notFound: true
    }
  }

  return products
}
