const nexteinConfig = require('nextein/config').default

module.exports = nexteinConfig({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' }
    }
  }
})
