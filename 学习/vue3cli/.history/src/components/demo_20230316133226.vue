<template>
  <h1>一个人信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Demo",
  beforeCreate() {
    console.log("---beforeCreate---");
  },
  props: ["msg"],
  setup(props, context) {
    // 数据
    console.log("---setup---", this, props, context);
    // 相当于vue2里的$attrs 没有声明接收的props
    console.log("---setup---", context.attrs);
    //

    let person = reactive({
      name: "张三",
      age: 18,
    });
    // 方法

    // 返回一个对象 常用
    return {
      person,
    };
  },
};
</script>

<style>
</style>