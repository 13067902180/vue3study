<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>m：{{ mon }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="mon++">修改m</button>
</template>

<script>
import { reactive, toRef } from "vue";

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
    const name1 = person.name;
    console.log("%%%", name1);
    // 转化为响应式
    const name2 = toRef(person, "name");

    console.log("%%%", name2);

    // 返回一个对象 常用
    return {
      name: person.name,
      age: person.age,
      mon: person.jon.jl.mon,
    };
  },
};
</script>

<style>
</style>