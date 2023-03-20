<template>
  <demo msg="你好啊" school="尚" @hello="showHelloMsg">
    <template v-slot:sqw>
      <div>1</div>
    </template>
    <span>slot插入</span>
  </demo>
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