<template>
  <demo v-if="isShowDemo"></demo>
</template>

<script>
import demo from "./components/demo.vue";
import { ref } from "vue";
export default {
  components: { demo },
  name: "App",

  setup() {
    const isShowDemo = ref(true);

    return {
      ...toRefs(isShowDemo),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>