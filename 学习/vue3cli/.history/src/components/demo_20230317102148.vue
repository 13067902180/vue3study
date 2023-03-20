<template>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>m：{{ person.jon.jl.mon }}</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.jon.jl.mon++">修改m</button>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Demo",

  setup(props, context) {
    // 数据

    let person = reactive({
      name: "zhang",
      age: 18,
      jon: {
        jl: {
          mon: 20,
        },
      },
    });

    // 返回一个对象 常用
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style>
</style>