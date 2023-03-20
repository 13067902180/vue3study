<template>
  <div class="app">
    <h3>app组件{{ name }}---{{ price }}</h3>
    <ChildVue></ChildVue>
  </div>
</template>

<script >
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import { defineComponent, reactive, toRefs } from "vue";
import ChildVue from "./components/Child.vue";
export default defineComponent({
  //import引入的组件需要注入到对象中才能使用
  components: { ChildVue },
  setup() {
    //这里存放数据
    const data = reactive({
      name: "benchi",
      price: 40,
    });

    const data2 = toRefs(data);
    return {
      ...data2,
    };
  },
});
</script>

<style lang="less" scoped>
</style>
