<template>
  <demo v-if="isShowDemo"></demo>
</template>

<script>
import demo from "./components/demo.vue";

export default {
  components: { demo },
  name: "App",

  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>