import Vue from 'vue';
import VueAMap from 'vue-amap';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: '66a39fd5c8e36ee4790c73e30ed7bdaa',
    plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
    // uiVersion: '1.0.11', // 版本号
    v: '1.4.8'
});