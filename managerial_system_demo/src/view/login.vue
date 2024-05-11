<template>
  <div class="button-container">
    <router-link to="/home">
      <a-button>首页</a-button>
    </router-link>
     <router-link to="/login">
      <a-button type="primary">登录</a-button>
    </router-link>
  </div>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <!-- 账号 -->
    <a-form-item
      label="账号"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
      class="center-input"
    >
      <a-input v-model:value="formState.username" style="width: 500px"/>
    </a-form-item>

    <!-- 密码 -->
    <a-form-item
      label="密码"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
      class="center-input"
    >
      <a-input-password v-model:value="formState.password" style="width: 500px"/>
    </a-form-item>

    <!-- 记住账号和密码 -->
    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">记住账号和密码</a-checkbox>
    </a-form-item>

    <!-- 提交按钮 -->
    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">提交</a-button>
    </a-form-item>
  </a-form>
    
</template>

<style>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh; /* 可根据需要调整高度 */
}

.center-input {
  display: flex;
  justify-content: center;
}
</style>

<script lang="ts" src="../ts/login.ts"></script>
