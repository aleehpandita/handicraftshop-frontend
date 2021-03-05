// const isProd = process.env.NODE_ENV === 'production'

// const withPWA = require('next-pwa')

// module.exports = withPWA({
//   pwa: {
//     disable: !isProd,
//     dest: 'public'
//   }
// })

const { withPlugins } = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const { i18n } = require('./next-i18next.config.js')
// next.js configuration
const nextConfig = {
  images: {
    // sizes: [320, 480, 820, 1200, 1600],
    domains: ['s3.amazonaws.com', 'scontent.cdninstagram.com', 'via.placeholder.com', 'craftystore.s3-us-west-2.amazonaws.com']
  }
}

module.exports = withPlugins([withOptimizedImages],
  { i18n }
  , nextConfig)
