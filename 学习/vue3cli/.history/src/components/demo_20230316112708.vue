<template>
  <h1>一个人信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Demo",
  beforeCreate() {},
  setup() {
    // 数据
    console.log("---setup---");
    let person = reactive({
      name: "张三",
      age: 18,
    });
    // 方法

    // 返回一个对象 常用
    return {
      person,
    };
  },
};
</script>

<style>
</style>