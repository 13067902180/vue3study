<!--
 * @Author: zzy 750188401@qq.com
 * @Date: 2023-10-11 10:59:56
 * @LastEditors: zzy 750188401@qq.com
 * @LastEditTime: 2023-10-11 11:11:17
 * @FilePath: \git测试\vue3study\学习\vue3cli\01 src分析工程结构\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- vue3可以没有根标签 -->
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>

  <router-view />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  margin: 50px;
  left: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
