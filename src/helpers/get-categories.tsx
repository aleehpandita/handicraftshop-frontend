import * as config from '../config'

export async function getCategories () {
  const res = await fetch(config.API_URL + config.API_VERSION + '/categories')
  const categories = await res.json()
  if (!categories) {
    return {
      notFound: true
    }
  }

  return categories
}
