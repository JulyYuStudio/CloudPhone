import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { NuxtAppOptions } from '@nuxt/vue-app';

export default function ({
    $axios,
    app,
}: {
    app: NuxtAppOptions;
    $axios: NuxtAxiosInstance;
}) {
    // let appUrl = "https://www.tianqiapi.com/"
    // $axios.defaults.baseURL = appUrl
    // $axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    // $axios.defaults.baseURL = "https://blog.julyyu.cn";
    $axios.setHeader('Access-Control-Allow-Origin','*');
    $axios.setHeader('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With');
    $axios.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    $axios.setHeader('Access-Control-Allow-Credentials',"true");
    $axios.setHeader('Content-Type', 'application/json;charset=utf-8;');
    // Adds header: `Content-Type: application/x-www-form-urlencoded` to only post requests
    // $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', [
        // 'post'
    // ])
    // Removes default Content-Type header from `post` scope
    // $axios.setHeader('Content-Type', false, ['post'])

}


