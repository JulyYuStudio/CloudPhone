// import { vendor } from "postcss";
// const path = require('path')
// const PostCompilePlugin = require('webpack-post-compile-plugin')
// const TransformModulesPlugin = require('webpack-transform-modules-plugin')
const routerBase = process.env.NODE_ENV === 'GH_PAGES' ? {
    target: 'static',
    router: {
        base: '/Nuxt-Jay',
        middleware: 'i18n'
    }
} : {}
module.exports = {
    target: 'static',
    srcDir: './src',
    mode: 'spa',
    module: {
        rules: [
            {
                test: /\.(glb|gltf)$/,
                use:
                    [
                        {
                            loader: 'file-loader',
                            options:
                            {
                                outputPath: 'assets/models/'
                            }
                        }
                    ]
            },
        ]
    },
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: "referrer", content: "no-referrer" },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    ...routerBase,
    router: {
        base: '/Cloud-Desktop',
        middleware: 'i18n'
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        'vant/lib/index.css',
        '~/css/main.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/i18n',
        '@/plugins/vant-ui',
        { src: '@/plugins/axios.ts', ssr: false },
        { src: "@/plugins/model-viewer", ssr: false, mode: "client" },
        "@/plugins/model-viewer",
        '@/plugins/amap'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        'nuxt-clipboard'
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) { },
        // vendor: ['vue-i18n']

    },
    generate: {
        dir: 'docs',
        subFloders: false
    },
    axios: {
        proxy: true,
        // baseURL: 'http://blog.julyyu.cn/Nuxt-Jay/',
        // proxyHeaders: false,
        credentials: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        }
    },
    proxy: {
        // '/tianqi': {
        //     target: 'https://www.tianqiapi.com',
        //     pathRewrite: { '^/tianqi': '' },
        //     changeOrigin: true
        // },
        '/360Weather': 'http://tq.360.cn/api/weatherquery/querys?app=tq360&code=101210106&t=1680931573567&c=1681032783673&_jsonp=renderData&_=1680931573568',
        '/360': {
            target: 'http://tq.360.cn/api/weatherquery/querys?app=tq360&code=101210106&t=1680931573567&c=1681032783673&_jsonp=renderData&_=1680931573568',
            pathRewrite: { '^/360': '' },
            changeOrigin: true,
            secure: false,
        },
        '/gankapi': {
            target: 'https://gank.io', // 代理地址
            pathRewrite: { '^/gankapi': '' },
            changeOrigin: true
        },
        '/large': {
            target: 'https://ww1.sinaimg.cn',
        },

        '/chat': {
            target: 'http://openapi.turingapi.com/openapi/api/v2',
            changeOrigin: true,
            pathRewrite: {
                '^/chat': ''  // 替换target中的请求地址，也就是说以后你在请求http://api.weatherdt.com/common/XXXXX这个地址的时候直接写成/api即可。
            },
            secure: false,
        }
    },
    clipboard: {
        autoSetContainer: true
    },

    build: {
        vendor: ["axios"]
    }
}