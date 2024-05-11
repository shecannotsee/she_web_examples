<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh; /* 可根据需要调整高度 */
}
*{
  padding: 0px;
  margin: 0px;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>

<script lang="ts" src="./ts/App.ts"></script>
  