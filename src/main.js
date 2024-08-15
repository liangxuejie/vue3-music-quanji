import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// 引入全局样式文件
import '@/assets/scss/index.scss'

createApp(App).use(router).mount('#app')
