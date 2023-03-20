<template>
  <div class="">我是Test组件</div>
</template>

<script >
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { defineComponent, reactive, toRefs } from "vue";
import userPoint from "../hooks/usePoint";
export default defineComponent({
  //import引入的组件需要注入到对象中才能使用
  components: {},
  name: "Test",
  setup() {
    //这里存放数据
    const data = reactive({});
    const data2 = toRefs(data);
    return {
      ...data2,
    };
  },
});
</script>

<style lang="less" scoped>
</style>
