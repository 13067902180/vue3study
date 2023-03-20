<template>
  <div class="app">
    <h3>app组件{{ name }}---{{ price }}</h3>
  </div>
</template>

<script >
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import { defineComponent, provide, reactive, toRefs } from "vue";

export default defineComponent({
  //import引入的组件需要注入到对象中才能使用

  setup() {
    //这里存放数据
    const data = reactive({
      name: "benchi",
      price: 40,
    });
    provide("car", data); //给后代组件传递数据
    const data2 = toRefs(data);
    return {
      ...data2,
    };
  },
});
</script>

<style lang="less" scoped>
</style>
