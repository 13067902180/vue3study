<template>
  <h1>一个人信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHello()">说话（Vue3配置的sayhello）</button>
  <button @click="sayWelcome()">说话（Vue2配置的sayWelcome）</button>
</template>

<script>
import { h } from "vue";
export default {
  name: "App",
  // 只是测试下setup 暂不考虑响应式问题
  data() {
    return {
      sex: "男",
    };
  },
  methods: {
    sayWelcome() {
      console.log(this.name);
      alert("欢迎");
    },
  },
  setup() {
    // 数据
    let name = "张三";
    let age = 18;
    // 方法
    function sayHello() {
      alert(`我叫${name},我${age}岁了，你好啊！`);
    }
    // 返回一个对象 常用
    return {
      name,
      age,
      sayHello,
    };
    // 返回一个渲染函数
    // return () => h("h1", "尚");
  },
};
</script>

<style lang="scss" scoped>
</style>