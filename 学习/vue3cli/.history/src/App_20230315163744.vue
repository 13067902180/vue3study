<template>
  <h1>一个人信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="changeInfo"></button>
</template>

<script>
import { h } from "vue";
export default {
  name: "App",

  setup() {
    // 数据
    let name = "张三";
    let age = 18;

    // 返回一个对象 常用
    return {
      name,
      age,
    };
    // 返回一个渲染函数
    // return () => h("h1", "尚");
  },
};
</script>

<style lang="scss" scoped>
</style>