import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { NuxtAppOptions } from '@nuxt/vue-app';

export default function ({
    $axios,
    app,
}: {
    app: NuxtAppOptions;
    $axios: NuxtAxiosInstance;
}) {
    let appUrl = "https://gank.io/"
    $axios.defaults.baseURL = appUrl
    // $axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $axios.setHeader('Access-Control-Allow-Origin','*');
    // Adds header: `Content-Type: application/x-www-form-urlencoded` to only post requests
    // $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', [
    //     'post'
    // ])
    // Removes default Content-Type header from `post` scope
    // $axios.setHeader('Content-Type', false, ['post'])

}


