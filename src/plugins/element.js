import Vue from 'vue'
import Element from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import '@/assets/css/element-variables.scss'

Vue.use(Element, { locale: process.env.VUE_APP_I18N_LOCALE === 'cn' ? zhLocale : enLocale })
