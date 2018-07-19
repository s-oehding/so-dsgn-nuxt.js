module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'pxlwrx.de',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Frontend Application for my personal Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Load Modules
  */
  modules: [
    // provide path to the file with resources
    [
      'nuxt-sass-resources-loader',
      './assets/main.scss'
    ]
  ],
  /*
  ** Load Plugins and Components
  */
  plugins: [
    '~/plugins/global.js'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    cockpit: {
      apiUrl: 'https://api.pxlwrx.de/index.php/rest/api',
      apiToken: 'f3b3fe831cf19cd4505283dc2b6ff8',
      baseUrl: 'https://api.pxlwrx.de'
    }
  }
}
