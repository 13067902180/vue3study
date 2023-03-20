<template>
  <div class="app">
    <h3>app组件{{ name }}---{{ price }}</h3>
  </div>
</template>

<script >
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import {
  defineComponent,
  isReactive,
  isReadonly,
  isRef,
  provide,
  reactive,
  readonly,
  toRefs,
  ref,
  isProxy,
} from "vue";

export default defineComponent({
  //import引入的组件需要注入到对象中才能使用

  setup() {
    //这里存放数据
    const data = reactive({
      name: "benchi",
      price: 40,
    });
    let sum = ref(0);
    let car = readonly(data);
    console.log(isRef(sum));
    console.log(isReactive(data));
    console.log(isReadonly(car));
    console.log(isProxy(data));
    console.log(isProxy(car2));
    provide("car", data); //给后代组件传递数据
    const data2 = toRefs(data); //data2是一个数组 data里的内部属性一个个的拎出来  去除前缀
    return {
      ...data2, //数组中一个个取出来
    };
  },
});
</script>

<style lang="less" scoped>
</style>
