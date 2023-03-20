<template>
  <h1>一个人信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Demo",

  setup(props, context) {
    // 数据

    let person = reactive({
      firstName: "张",
      lastName: "三",
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