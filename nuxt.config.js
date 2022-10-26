export default {
  head: {
    title: 'Demo',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/ebsi-logo.svg' }],
  },

  css: ['~/assets/scss/fonts.scss', '~/assets/scss/main.scss'],
  // styleResources: {
  //   // css: ['~/assets/css/main.css'],
  // },

  components: true,

  // module: {
  //   rules: [
  //     {
  //       test: /\.s[ac]ss$/i,
  //       use: ['style-loader', 'css-loader', 'sass-loader'],
  //     },
  //   ],
  // },

  buildModules: ['@nuxt/postcss8'],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  proxy: {
    // ...................    
  },

  auth: {
    // ............
  },

  i18n: {
    // .........
  },

  router: {
    middleware: ['auth'],
  },

  publicRuntimeConfig: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
    postcss: {
      plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  ssr: false,
  server: {
    port: 8000,
  },
}
