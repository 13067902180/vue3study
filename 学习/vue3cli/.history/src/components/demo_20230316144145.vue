<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">+1</button>
  <hr />
  <h2>当前信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="changeName">修改姓名</button>
  <button @click="changeAge">修改年龄</button>
</template>

<script>
import { ref, computed, reactive, watch } from "vue";

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
    });
    // 计算属性
    // 方法
    // 监视 情况1监视ref所定义的一个响应式数据
    watch(
      sum,
      (newValue, oldValue) => {
        console.log("值变化了", newValue, oldValue);
      },
      { immediate: true, deep: true }
    );
    // 监视 情况2监视ref所定义的多个响应式数据
    // newValue, oldValue 是顺序的数组
    //  watch([sum,msg], (newValue, oldValue) => {
    //   console.log("值变化了", newValue, oldValue);
    // },{ immediate: true, deep: true });
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