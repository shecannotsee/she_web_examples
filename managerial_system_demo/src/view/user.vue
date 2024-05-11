<template>
  <a-table :columns="columns" :data-source="pageData.dataList" bordered>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
    <template #title>
      <a-button type="primary" v-on:click="refreshData">查询</a-button>
      这里是开头</template>
    <template #footer>再往下没有了！</template>
  </a-table>
</template>

<style>
</style>

<script lang="ts" src="../ts/user.ts"></script>
