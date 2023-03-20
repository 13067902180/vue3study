<template>
  <demo v-if="isShowDemo"></demo>
</template>

<script>
import demo from "./components/demo.vue";

export default {
  components: { demo },
  name: "App",

  setup() {
    const isShowDemo = ref(true);

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>