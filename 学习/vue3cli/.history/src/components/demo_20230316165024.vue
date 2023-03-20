<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">+1</button>
</template>

<script>
import { ref, computed, reactive, watch, watchEffect } from "vue";

export default {
  name: "Demo",
  setup(props, context) {
    // 数据
    let sum = ref(0);
    // 返回一个对象 常用
    return {
      sum,
    };
  },
  beforeCreate() {
    console.log("---beforeCreate----");
  },
  created() {
    console.log("-----created-------");
  },
  beforeMount() {
    console.log("---beforMounted----");
  },
  mounted() {
    console.log("---mounted----");
  },
};
</script>

<style>
</style>