<template>
    <!-- 上传按钮start -->
    <a-upload
      v-model:file-list="fileList"
      name="file"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :headers="headers"
      @change="handleChange"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        点击上传
      </a-button>
    </a-upload>
    <!-- 上传按钮end -->

    <!-- 下载按钮start -->
    <a-button @click="downloadFile">下载文件</a-button>
    <!-- 下载按钮end -->
    
</template>
  
<style>
</style>
  
<script lang="ts" src="../ts/uploadAndDownload.ts"></script>
