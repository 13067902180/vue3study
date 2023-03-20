<template>
  <div class="child">
    <h3>我是Child组件</h3>
    {{ sum }}
  </div>
</template>

<script >
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import { defineComponent, reactive, toRefs, inject, ref } from "vue";

export default defineComponent({
  //import引入的组件需要注入到对象中才能使用
  name: "Child",
  async setup() {
    let sum = ref(0);
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum });
      }, 1000);
    });
    return await p;
  },
});
</script>

<style lang="less" scoped>
</style>
