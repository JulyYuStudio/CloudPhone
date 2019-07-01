// import { vendor } from "postcss";

module.exports = {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
        'ant-design-vue/dist/antd.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        // '@/plugins/antd-ui',
        '@/plugins/i18n',
        '@/plugins/element-ui'
        // '@/plugins/muse-ui',
        // { src: '@/plugins/axios.ts', ssr: true }
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
        // vendor: ['axios']
    },
    axios: {
        proxy: true,
    },
    proxy: {
        '/api': {
            target: 'https://gank.io/gankio', // 代理地址
            changeOrigin: true,
            pathRewrite: { '^/gankio': '' }
        },
    }

}