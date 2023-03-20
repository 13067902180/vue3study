<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏</button>
  <demo v-if="isShowDemo"></demo>
</template>

<script>
import demo from "./components/demo.vue";
import Test from "./components/Test.vue";
import { ref } from "vue";
export default {
  components: { demo, Test },
  name: "App",

  setup() {
    const isShowDemo = ref(true);

    return {
      isShowDemo,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>