export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { hid: 'keywords', name: 'keywords', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // check
      { href: '~/assets/img/favicon.png', rel: 'icon' },
      // check
      { href: '~/assets/img/apple-touch-icon.png', rel: 'apple-touch-icon' },
      {
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700',
        rel: 'stylesheet'
      }
    ],
    script: [
      { src: '/lib/jquery/jquery.min.js', body: true },
      { src: '/lib/jquery/jquery-migrate.min.js', body: true },
      { src: '/lib/bootstrap/js/bootstrap.bundle.min.js', body: true },
      { src: '/lib/easing/easing.min.js', body: true },
      { src: '/lib/mobile-nav/mobile-nav.js', body: true },
      { src: '/lib/wow/wow.min.js', body: true },
      { src: '/lib/waypoints/waypoints.min.js', body: true },
      { src: '/lib/counterup/counterup.min.js', body: true },
      { src: '/lib/owlcarousel/owl.carousel.min.js', body: true },
      { src: '/lib/isotope/isotope.pkgd.min.js', body: true },
      { src: '/lib/lightbox/js/lightbox.min.js', body: true },
      { src: '/contactform/contactform.js', body: true },
      { src: '/js/main.js', body: true }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/lib/bootstrap/css/bootstrap.min.css',
    '~/assets/lib/font-awesome/css/font-awesome.min.css',
    '~/assets/lib/animate/animate.min.css',
    '~/assets/lib/ionicons/css/ionicons.min.css',
    '~/assets/lib/owlcarousel/assets/owl.carousel.min.css',
    '~/assets/lib/lightbox/css/lightbox.min.css',
    '~/assets/css/style.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-carousel', mode: 'client' },
    { src: '~/plugins/vue-number-animation', mode: 'client' },
    { src: '~/plugins/vue-isotopes', mode: 'client' },
    { src: '~/plugins/vue-images-loaded', mode: 'client' }, 
    { src: '~/plugins/navscroll' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'vue-scrollto/nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}