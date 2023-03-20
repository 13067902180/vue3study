<template>
  <div class="son">
    <h3>我是son组件</h3>
    <DialogVue></DialogVue>
  </div>
</template>

<script >
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { defineComponent, inject, reactive, toRefs } from "vue";
import DialogVue from "./Dialog.vue";

export default defineComponent({
  name: "Son",
  //import引入的组件需要注入到对象中才能使用
  components: { DialogVue },
});
</script>

<style lang="less" scoped>
</style>
