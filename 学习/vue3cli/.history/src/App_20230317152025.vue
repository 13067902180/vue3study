<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    // 自定义一个ref名为customRef
    function myRef(value) {
      console.log("---myref---", value);
      return customRef(() => {
        return {
          get() {},
          set() {},
        };
      });
    }
    // const keyWord = ref("hello");//使用vue提供的ref
    const keyWord = myRef("hello"); //使用自定义的ref
    return {
      keyWord,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>