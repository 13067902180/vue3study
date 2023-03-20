<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    // 自定义一个ref名为customRef
    function myRef(value) {
      console.log("---myref---", value);
      return customRef((trick, trigger) => {
        return {
          get() {
            console.log(`从myref里读取了数据把${value}给了他`);
            trick(); //通知vue追踪数据的变化(提前通知vue get是有用的)
            return value; //第三步
          },
          set(newValue) {
            console.log(`把myref里的数据改为了${newValue}`);
            value = newValue; //第一步
            trigger(); //通知vue去重新解析模板 第二步
          },
        };
      });
    }
    // const keyWord = ref("hello");//使用vue提供的ref
    const keyWord = myRef("hello"); //使用自定义的ref
    return {
      keyWord,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>