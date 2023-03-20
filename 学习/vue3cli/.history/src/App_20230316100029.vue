<template>
  <h1>一个人信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>GZ：{{ person.job.type }}</h2>
  <h2>D：{{ person.job.salary }}</h2>
  <h2 v-show="person.sex">性别{{ person.sex }}</h2>
  <h2>c：{{ person.job.a.b.c }} {{ person.hobby[0] }}</h2>
  <button @click="changeInfo">修改人信息</button>
  <button @click="addInfo">添加属性SEX</button>
  <button @click="removeInfo">删除属性NAME</button>
</template>

<script>
import { h, reactive } from "vue";
import { ref } from "vue";
export default {
  name: "App",

  setup() {
    // 数据
    // let name = ref("张三");
    // let hobby = reactive(["11", "22", "33"]);
    // let age = ref(18);
    // let job = reactive({
    //   type: "前端",
    //   salary: "4",
    //   a: {
    //     b: {
    //       c: 66,
    //     },
    //   },
    // });
    let person = reactive({
      name: "张三",
      hobby: ["11", "22", "33"],
      age: 18,
      job: {
        type: "前端",
        salary: "4",
        a: {
          b: {
            c: 66,
          },
        },
      },
    });
    // 方法
    function changeInfo() {
      console.log(person.job);
      // .value把refimgl转化为reactive对象 proxy
      (person.name = "李四"), (person.age = 48);
      (person.job.type = "后端"),
        (person.job.salary = 5),
        (person.job.a.b.c = 99);
      // vue2的defineProperty不支持这种写法  vue3 的proxy支持
      person.hobby[0] = "44";
    }
    function addInfo() {
      person.sex = "男";
    }
    function removeInfo() {}
    // 返回一个对象 常用
    return {
      person,
      changeInfo,
      addInfo,
      removeInfo,
    };
    // 返回一个渲染函数
    // return () => h("h1", "尚");
  },
};
</script>

<style lang="scss" scoped>
</style>