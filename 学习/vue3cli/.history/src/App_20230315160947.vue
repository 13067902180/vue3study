<template>
  <div></div>
</template>

<script>
export default {
  name: "App",
  setup() {
    // 数据
    let name = "张三";
    let age = 18;
    // 方法
    function sayHello() {
      alert(`我叫${name},我${age}岁了，你好啊！`);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>