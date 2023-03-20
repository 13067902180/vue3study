<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">+1</button>
  <hr />
  <h2>当前点击时鼠标的坐标是：x：{{ point.x }}，y：{{ point.y }}</h2>
</template>

<script>
import { onBeforeMount, onMounted, reactive, ref } from "vue";

export default {
  name: "Demo",
  setup(props, context) {
    // 数据
    let sum = ref(0);
    let point = reactive({
      x: 0,
      y: 0,
    });
    function savePoint(event) {
      point.x = event.pageX;
      point.y = event.pageY;
      console.log(event.pageX, event.pageY);
    }
    onMounted(() => {
      window.addEventListener("click", savePoint);
      onBeforeMount(() => {
        window.removeEventListener("click", savePoint);
      });
    });
    // 返回一个对象 常用
    return {
      sum,
      point,
    };
  },
  //   #region
  //   vue3的声生命周期钩子
  //   beforeCreate() {
  //     console.log("---beforeCreate--");
  //   },
  //   created() {
  //     console.log("-----created-----");
  //   },
  //   beforeMount() {
  //     console.log("---beforMounted--");
  //   },
  //   mounted() {
  //     console.log("-----mounted-----");
  //   },
  //   beforeUpdate() {
  //     console.log("--beforeUpdate---");
  //   },
  //   updated() {
  //     console.log("-----updated-----");
  //   },
  //   beforeUnmount() {
  //     console.log("--beforeUnmount--");
  //   },
  //   unmounted() {
  //     console.log("----unmounted---");
  //   },
  //   #endregion
};
</script>

<style>
</style>