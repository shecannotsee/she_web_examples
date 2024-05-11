<template>
  <!-- Navigation buttons -->
  <div class="button-container">
    <router-link to="/home">
      <a-button>首页</a-button>
    </router-link>
    <router-link to="/login">
      <a-button type="primary">登录</a-button>
    </router-link>
  </div>

  <!-- Main content -->
  <div class="home-container">
    <h1>Welcome to the Home Page</h1>
    <p>Modify this section to showcase your content.</p>
  </div>
</template>

<style>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh; /* You can adjust the height as needed */
}

.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh; /* Adjust the height to fill the remaining space */
}
</style>

<script lang="ts" src="../ts/home.ts"></script>
