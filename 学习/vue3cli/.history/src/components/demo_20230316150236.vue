<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">+1</button>
  <hr />
  <h2>当前信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>m：{{ person.jon.jl.mon }}</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.jon.jl.mon++">修改m</button>
</template>

<script>
import { ref, computed, reactive, watch } from "vue";

export default {
  name: "Demo",
  //   watch: {
  //     // sum(newValue, oldValue) {
  //     //   console.log("值变化了", newValue, oldValue);
  //     // },
  //     sum: {
  //       immediate: true, //开始就触发一次立即监听一下
  //       deep: true, //深度监视
  //       handler(newValue, oldValue) {
  //         console.log("值变化了", newValue, oldValue);
  //       },
  //     },
  //   },
  setup(props, context) {
    // 数据
    let sum = ref(0);
    let msg = ref("你好");
    let person = reactive({
      name: "zhang",
      age: 18,
      jon: {
        jl: {
          mon: 20,
        },
      },
    });
    // 计算属性
    // 方法
    // 监视 情况1监视ref所定义的一个响应式数据
    // watch(
    //   sum,
    //   (newValue, oldValue) => {
    //     console.log("值变化了", newValue, oldValue);
    //   },
    //   { immediate: true, deep: true }
    // );
    // 监视 情况2监视ref所定义的多个响应式数据
    // newValue, oldValue 是顺序的数组
    //  watch([sum,msg], (newValue, oldValue) => {
    //   console.log("值变化了", newValue, oldValue);
    // },{ immediate: true, deep: true });
    // 情况3 监视reactive定义的响应式数据  如果用reactive定义的数据 全部数据无法正确的获取oldValue
    // 是reactive 强制开启 深度监视deep无效
    // watch(person, (newValue, oldValue) => {
    //   console.log("person变化了", newValue, oldValue);
    // },{depp:false});此处的deep无效
    //情况4 监视reactive响应式里的 单个属性改为函数返回值
    //  只能监视 数组 ref reactive
    // watch(
    //   () => person.age,
    //   (newValue, oldValue) => {
    //     console.log("person的age变化了", newValue, oldValue);
    //   }
    // );
    // 情况5 监视reactive响应式里的 某些属性
    // watch([() => person.age, () => person.name], (newValue, oldValue) => {
    //   console.log("person的age或name变化了", newValue, oldValue);
    // });
    // 特殊情况
    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log("person的job变化了", newValue, oldValue);
      }
    );
    // 返回一个对象 常用
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style>
</style>