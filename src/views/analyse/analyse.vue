<script setup lang="ts">
let a = ref(123);
const loading = ref(false);
</script>

<template>
  <div>
    <el-card v-loading="loading">
      <h1 class="text-3xl font-bold underline">
        Hello world! <el-icon><i-ep-right /></el-icon> {{ a }}
      </h1>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <div><svg-icon icon-name="logo" />测试文字</div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped></style>
