// import { vendor } from "postcss";
// const path = require('path')
// const PostCompilePlugin = require('webpack-post-compile-plugin')
// const TransformModulesPlugin = require('webpack-transform-modules-plugin')

module.exports = {
    srcDir: './src',
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
        'vant/lib/index.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/i18n',
        '@/plugins/vant-ui',
        { src: '@/plugins/axios.ts', ssr: true }
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
        '/tianqi': {
            target: 'https://www.tianqiapi.com',
            pathRewrite: { '^/tianqi': '' }
        },
        '/gankapi': {
            target: 'https://gank.io', // 代理地址
            pathRewrite: { '^/gankapi': '' }
        },
        '/large': {
            target: 'https://ww1.sinaimg.cn',
        }
    },

}