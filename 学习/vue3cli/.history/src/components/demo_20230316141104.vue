<template>
  <h1>一个人信息</h1>
  姓：<input type="text" v-model="person.firstName" /> 名：<input
    type="text"
    v-model="person.lastName"
  />
  全名：{{ fullName }}
</template>

<script>
import { computed, reactive } from "vue";

export default {
  name: "Demo",

  setup(props, context) {
    // 数据

    let person = reactive({
      firstName: "张",
      lastName: "三",
    });
    // 计算属性
    let fullName = computed(() => {
      return person.firstName + person.lastName;
    });
    // 方法

    // 返回一个对象 常用
    return {
      person,
      fullName,
    };
  },
};
</script>

<style>
</style>