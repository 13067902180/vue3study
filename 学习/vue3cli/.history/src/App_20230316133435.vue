<template>
  <demo msg="你好啊" school="尚" @hello="showHelloMsg"></demo>
</template>

<script>
import demo from "./components/demo.vue";

export default {
  components: { demo },
  name: "App",
  setup() {
    function showHelloMsg(value) {
      alert(`你好啊触发了一个hello函数${value}`);
    }
    return {
      showHelloMsg,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>