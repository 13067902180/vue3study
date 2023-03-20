<template>
  <div class="app">
    <h3>app组件</h3>
    <Child></Child>
  </div>
</template>

<script >
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import { defineAsyncComponent, defineComponent } from "vue";
// 动态引入 异步
const Child = defineAsyncComponent(() => {
  import("./components/Child.vue");
});
// 静态引入
// import Child from "./components/Child.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "App",
  components: { Child },
};
</script>

<style lang="less" scoped>
</style>

