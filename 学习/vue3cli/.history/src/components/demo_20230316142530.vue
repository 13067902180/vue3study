<template>
  <h2>当前求和为：{{ sum }}</h2>
</template>

<script>
import { ref, computed, reactive } from "vue";

export default {
  name: "Demo",

  setup(props, context) {
    // 数据

    let sum = ref(0);
    // 计算属性
    // 方法

    // 返回一个对象 常用
    return {
      sum,
    };
  },
};
</script>

<style>
</style>