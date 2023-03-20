<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">+1</button>
  <hr />
  <h2>当前信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>m：{{ person.jon.jl.mon }}</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.jon.jl.mon++">修改m</button>
</template>

<script>
import { ref, computed, reactive, watch, watchEffect } from "vue";

export default {
  name: "Demo",
  //   watch: {
  //     // sum(newValue, oldValue) {
  //     //   console.log("值变化了", newValue, oldValue);
  //     // },
  //     sum: {
  //       immediate: true, //开始就触发一次立即监听一下
  //       deep: true, //深度监视
  //       handler(newValue, oldValue) {
  //         console.log("值变化了", newValue, oldValue);
  //       },
  //     },
  //   },
  setup(props, context) {
    // 数据
    let sum = ref(0);
    let msg = ref("你好");
    let person = reactive({
      name: "zhang",
      age: 18,
      jon: {
        jl: {
          mon: 20,
        },
      },
    });

    watchEffect(() => {
      console.log("wathcEffectz执行了");
      const x1 = sum.value;
      const x2 = person.jon.jl.mon;
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