<template>
  <div class="">我是Test组件</div>
  <!-- <h2>当前点击时鼠标的坐标是：x：{{ point.x }}，y：{{ point.y }}</h2> -->
</template>

<script >
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { reactive, toRefs } from "vue";
import userPoint from "../hooks/usePoint";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  name: "Test",
  //   setup() {
  //     const point = userPoint;
  //     //这里存放数据

  //     return {
  //       point,
  //     };
  //   },
};
</script>

<style lang="less" scoped>
</style>
