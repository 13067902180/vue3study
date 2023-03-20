<template>
  <h4>当前的x值是：{{ x }}</h4>
  <button @click="x++">x +1</button>
  <hr />

  <h4>{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>m：{{ jon.jl.mon }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="jon.jl.mon++">修改m</button>
</template>

<script>
import { reactive, toRef, toRefs, shallowReactive, shallowRef, ref } from "vue";

export default {
  name: "Demo",

  setup(props, context) {
    // 数据
    // shallowReactive    浅层次的数据绑定第一层
    // let person = shallowReactive({
    let person = reactive({
      name: "zhang",
      age: 18,
      jon: {
        jl: {
          mon: 20,
        },
      },
    });
    // shallowRef ref传递的是对象类型
    let x = shallowRef({
      y: 0,
    });
    // 返回一个对象 常用
    return {
      person,
      x,
      ...toRefs(person),
      //...作用 将对象内的每组keyvalue全放出来
    };
  },
};
</script>

<style>
</style>