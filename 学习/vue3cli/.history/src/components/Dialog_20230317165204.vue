<template>
  <div>
    <button>点我弹窗</button>
    <div>
      <h3>我是弹窗</h3>
      <h4>一些内容</h4>
      <h4>一些内容</h4>
      <h4>一些内容</h4>
      <button>关闭弹窗</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false);
    return {
      isShow,
    };
  },
};
</script>

<style>
</style>