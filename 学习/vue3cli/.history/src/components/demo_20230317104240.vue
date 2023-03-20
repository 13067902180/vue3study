<template>
  <h4>{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>m：{{ jon.jl.mon }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="jon.jl.mon++">修改m</button>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";

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
    const x = toRefs(person);
    console.log("%%", x);

    // 返回一个对象 常用
    return {
      person,
      // name: Ref(person, "name")打包成新的ref对象 与原数据分离
      // name: toRef(person, "name"),
      // age: toRef(person, "age"),
      // mon: toRef(person.jon.jl, "mon"),
      ...toRefs(person),
      //...作用 将对象内的每组keyvalue全放出来
    };
  },
};
</script>

<style>
</style>