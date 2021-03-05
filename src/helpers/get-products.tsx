import * as config from '../config'

export async function getProducts () {
  const res = await fetch(config.API_URL + config.API_VERSION + '/products')
  const products = await res.json()
  console.log('products', products)
  if (!products) {
    return {
      notFound: true
    }
  }

  return products
}
