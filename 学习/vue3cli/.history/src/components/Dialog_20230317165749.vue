<template>
  <div>
    <button @click="isShow = true">点我弹窗</button>
    <Teleport to="body">
      <!-- 传送这个弹窗到body区 -->
      <div v-if="isShow">
        <h3>我是弹窗</h3>
        <h4>一些内容</h4>
        <h4>一些内容</h4>
        <h4>一些内容</h4>
        <button @click="isShow = false">关闭弹窗</button>
      </div>
    </Teleport>
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