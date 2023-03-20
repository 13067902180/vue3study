<template>
  <h1>一个人信息</h1>
  姓：<input type="text" v-model="person.firstName" /> 名：<input
    type="text"
    v-model="person.lastName"
  />
  全名：{{ person.fullName }} 全名：<input
    type="text"
    v-model="person.fullName"
  />
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
      return person.firstName + "-" + person.lastName;
    });
    // 第二种 简写只读
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });
    // 完整写法考虑计算属性的读和写
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const nameArr = value.split("-");
        (person.firstName = nameArr[0]), (person.lastName = nameArr[1]);
      },
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