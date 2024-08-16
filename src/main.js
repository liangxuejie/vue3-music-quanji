import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import lazyPlugin from 'vue3-lazy'
import loadingPic from '@/assets/images/default.png'

// 引入全局样式文件
import '@/assets/scss/index.scss'

// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.use(router)
app.use(lazyPlugin, {
  loading: loadingPic
})
app.mount('#app')
