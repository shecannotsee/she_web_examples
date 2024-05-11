<template>
    <a-table :columns="columns" :data-source="pageData.dataList" bordered>
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
      </template>
      <template #title>
        <a-input v-model:value="inputYear" placeholder="年:20xx" style="width: 100px"/>
        <a-input v-model:value="inputMonth" placeholder="月:1-12" style="width: 100px"/>
        <a-button type="primary" v-on:click="refreshData">查询</a-button><br/><br/>
      </template>
      <template #footer>再往下没有了！</template>
    </a-table>
</template>
  
<style>
</style>
  
<script lang="ts" src="../ts/projectByMonth.ts"></script>
  