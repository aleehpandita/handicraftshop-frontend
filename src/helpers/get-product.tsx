import * as config from '../config'

export async function getProduct (data) {
  const res = await fetch(config.API_URL + config.API_VERSION + '/products/' + data)
  const product = await res.json()
  if (!product) {
    return {
      notFound: true
    }
  }

  return product
}
