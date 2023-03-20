<template>
  <div class="son">
    <h3>我是son组件,{{ car.name }}---{{ car.price }}</h3>
  </div>
</template>

<script >
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { defineComponent, inject, reactive, toRefs } from "vue";
export default defineComponent({
  name: "Son",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  setup() {
    //这里存放数据
    const data = reactive({});
    const data2 = toRefs(data);
    let car = inject(car);
    console.log(car);
    return {
      ...data2,
      car,
    };
  },
});
</script>

<style lang="less" scoped>
</style>
