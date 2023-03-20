<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">+1</button>
  <hr />
  <h2>当前信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
</template>

<script>
import { ref, computed, reactive, watch } from "vue";

export default {
  name: "Demo",
  //   watch: {
  //     // sum(newValue, oldValue) {
  //     //   console.log("值变化了", newValue, oldValue);
  //     // },
  //     sum: {
  //       immediate: true, //开始就触发一次立即监听一下
  //       deep: true, //深度监视
  //       handler(newValue, oldValue) {
  //         console.log("值变化了", newValue, oldValue);
  //       },
  //     },
  //   },
  setup(props, context) {
    // 数据
    let sum = ref(0);
    // 计算属性
    // 方法
    // 监视 情况1监视ref所定义的一个响应式数据
    /* watch(sum, (newValue, oldValue) => {
      console.log("值变化了", newValue, oldValue);
    });*/
    // 监视 情况2监视ref所定义的多个响应式数据
    /* watch(sum, (newValue, oldValue) => {
      console.log("值变化了", newValue, oldValue);
    });*/
    // 返回一个对象 常用
    return {
      sum,
    };
  },
};
</script>

<style>
</style>