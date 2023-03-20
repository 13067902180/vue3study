<template>
  <h1>一个人信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="changeInfo">修改人信息</button>
</template>

<script>
import { h } from "vue";
import { ref } from "vue";
export default {
  name: "App",

  setup() {
    // 数据
    let name = ref("张三");
    let age = ref(18);
    // 方法
    function changeInfo() {
      console.log(name.age);
      (name = "李四"), (age = 48);
    }
    // 返回一个对象 常用
    return {
      name,
      age,
      changeInfo,
    };
    // 返回一个渲染函数
    // return () => h("h1", "尚");
  },
};
</script>

<style lang="scss" scoped>
</style>