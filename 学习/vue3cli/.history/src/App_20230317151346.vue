<template>
  <input type="text" v-model="keyWord" />
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",

  setup() {
    const keyWord = ref("hello");

    return {
      keyWord,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>