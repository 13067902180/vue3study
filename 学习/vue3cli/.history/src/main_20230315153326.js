// 引入不在是vue构造函数，引入的是一个名为creatApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 创建应用实例对象 app (类似于之前vue2的vm)
const app = createApp(App)
app.use(store).use(router).mount('#app')
/*
new Vue({
  render: h => h(App),
  }
}).$mount('#app')
*/ 