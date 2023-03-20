<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点我++</button>
  <hr />
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>m：{{ jon.jl.mon }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="jon.jl.mon++">修改m</button>
  <!-- <h2>原始的person数据</h2> -->
  <button @click="showRawPerson">输出原始的person对象</button>
</template>

<script>
import {
  reactive,
  toRef,
  toRefs,
  shallowReactive,
  shallowRef,
  ref,
  readonly,
  shallowReadonly,
  toRaw,
} from "vue";

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
    let sum = ref(0);
    // 返回一个对象 常用
    // person = readonly(person);
    person = shallowReadonly(person);
    function showRawPerson() {
      const p = toRaw(person);
    }
    return {
      sum,
      showRawPerson,
      ...toRefs(person),
      //...作用 将对象内的每组keyvalue全放出来
    };
  },
};
</script>

<style>
</style>