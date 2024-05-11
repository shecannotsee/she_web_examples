<template>
    <a-table :columns="columns" :data-source="pageData.dataList" bordered>
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
      </template>
      <template #title>
        <a-input v-model:value="projectName" placeholder="请输入要查询的项目名" style="width: 200px"/>
        <a-button type="primary" v-on:click="refreshDataByName">查询</a-button> &&
        <a-input v-model:value="count" placeholder="请输入要查询的条数" style="width: 200px"/>
        <a-button type="primary" v-on:click="refreshDataByCount">查询</a-button> &&
        <a-input v-model:value="startTime" placeholder="开始时间" style="width: 100px"/>
        <a-input v-model:value="endTime" placeholder="结束时间" style="width: 100px"/>
        <a-button type="primary" v-on:click="refreshDataByTime">查询</a-button><br/><br/>
        <a-button type="primary" v-on:click="refreshData">多条件查询</a-button>
        </template>
      <template #footer>再往下没有了！</template>
    </a-table>
</template>
  
<style>
</style>
  
<script lang="ts" src="../ts/project.ts"></script>
  