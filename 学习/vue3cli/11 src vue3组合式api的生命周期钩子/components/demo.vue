<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">+1</button>
</template>

<script>
import {
  ref,
  computed,
  reactive,
  watch,
  watchEffect,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default {
  name: "Demo",
  setup(props, context) {
    // 数据
    let sum = ref(0);
    // 通过组合式API的形式去使用生命周期钩子
    onBeforeMount(() => {
      // 函数体
      console.log("---onBeforeMount ---");
    });
    onMounted(() => {
      // 函数体
      console.log("---onMounted---");
    });
    onBeforeUpdate(() => {
      // 函数体
      console.log("---onBeforeUpdate---");
    });
    onUpdated(() => {
      // 函数体
      console.log("---onUpdated---");
    });
    onBeforeUnmount(() => {
      // 函数体
      console.log("---onBeforeUnmount---");
    });
    onUnmounted(() => {
      // 函数体
      console.log("---onUnmounted---");
    });
    // 返回一个对象 常用
    return {
      sum,
    };
  },
  //   #region
  //   vue3的声生命周期钩子
  //   beforeCreate() {
  //     console.log("---beforeCreate--");
  //   },
  //   created() {
  //     console.log("-----created-----");
  //   },
  //   beforeMount() {
  //     console.log("---beforMounted--");
  //   },
  //   mounted() {
  //     console.log("-----mounted-----");
  //   },
  //   beforeUpdate() {
  //     console.log("--beforeUpdate---");
  //   },
  //   updated() {
  //     console.log("-----updated-----");
  //   },
  //   beforeUnmount() {
  //     console.log("--beforeUnmount--");
  //   },
  //   unmounted() {
  //     console.log("----unmounted---");
  //   },
  //   #endregion
};
</script>

<style>
</style>