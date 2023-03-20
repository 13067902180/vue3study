// 引入不在是vue构造函数，引入的是一个名为creatApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
