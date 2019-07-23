import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ZH_LANG from "@/common/lang/zh"
import EN_LANG from "@/common/lang/en"


Vue.use(VueI18n)

// const i18n = new VueI18n({
//     locale: 'zh-CN', // 语言标识
//     //this.$i18n.locale // 通过切换locale的值来实现语言切换
//     messages: {
//         'zh-CN': require('~/common/lang/zh'), // 中文语言包
//         'en-US': require('~/common/lang/en') // 英文语言包
//     }
// })

export default ({ app, store }) => {

    app.i18n = new VueI18n({
        locale: store.state.locale,
        fallbackLocale: 'zh_CN',
        messages: {
            'zh_CN' : ZH_LANG, // 中文语言包
            'en_US' : EN_LANG // 英文语言包
        },
        missing(){
            return '...';
        }
    })
    console.log("app.i18n", app.i18n)
    app.i18n.path = (link) => {
        // 如果是默认语言，就省略
        if (app.i18n.locale === app.i18n.fallbackLocale) {
            return `/${link}`
        }
        return `/${app.i18n.locale}/${link}`
    }
}