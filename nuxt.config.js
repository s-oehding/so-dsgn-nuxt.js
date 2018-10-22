
require('dotenv').config()

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: 'orangered',
    height: '3px'
  },
  /*
  ** Customize router
  */
  router: {
    linkActiveClass: 'is-active'
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/main.scss', lang: 'scss' }
  ],
  /*
  ** Load Modules
  */
  modules: [
    [
      'nuxt-sass-resources-loader',
      [
        '~/assets/_variables.scss',
        '~/assets/mixins/*'
      ]
    ],
    ['nuxt-buefy', { css: false, materialDesignIcons: true }],
    '@nuxtjs/dotenv'
  ],
  /*
  * Load Plugins and Components
  */
  plugins: [
    '~/plugins/global.js',
    '~/plugins/axios.js',
    '~/plugins/apiClient.js',
    { src: '~/plugins/vue-agile', ssr: false },
    { src: '~/plugins/v-tiny-slider', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
     * Vendor Plugins
     */
    vendor: ['tiny-slider'],
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
        config.node = {
          fs: 'empty'
        }
      }
    },
    /*
    *  Fix PostCss Warning caused by css variables used by Bulma
    */
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },
  env: {
    cockpit: {
      apiUrl: process.env.API_URL,
      apiToken: process.env.API_TOKEN,
      baseUrl: process.env.BASE_URL
    }
  }
}
