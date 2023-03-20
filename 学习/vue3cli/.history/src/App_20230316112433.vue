<template>
  <demo></demo>
</template>

<script>
import { h, reactive } from "vue";
import { ref } from "vue";
import demo from "./components/demo.vue";

export default {
  components: { demo },
  name: "App",

  setup() {
    // 数据

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

<style lang="scss" scoped>
</style>