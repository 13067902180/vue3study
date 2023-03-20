<template>
  <h1>一个人信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHello"></button>
</template>

<script>
export default {
  name: "App",
  // 只是测试下setup 暂不考虑响应式问题
  setup() {
    // 数据
    let name = "张三";
    let age = 18;
    // 方法
    function sayHello() {
      alert(`我叫${name},我${age}岁了，你好啊！`);
    }
    return {
      name,
      age,
      sayHello,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>