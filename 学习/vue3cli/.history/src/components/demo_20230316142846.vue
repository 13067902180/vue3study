<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">+1</button>
</template>

<script>
import { ref, computed, reactive } from "vue";

export default {
  name: "Demo",
  watch: {
    // sum(newValue, oldValue) {
    //   console.log("值变化了", newValue, oldValue);
    // },
    sum: {
      handler(newValue, oldValue) {
        console.log("值变化了", newValue, oldValue);
      },
    },
  },
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