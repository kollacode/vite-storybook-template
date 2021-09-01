<template>
  <h1>Events in progress</h1>
  <ElRow :gutter="20" justify="space-between">
    <ElCol :span="16">
      <ElInput
        v-model="textQuery"
        placeholder="Search Events in progress"
        prefix-icon="el-icon-search"
      >
      <template #append>
        <el-button type="primary">Search Events</el-button>
      </template>
      </ElInput>
    </ElCol>
    <ElCol :span="8">
      <el-date-picker
        v-model="dateRange"
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date">
      </el-date-picker>
    </ElCol>
  </ElRow>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  ElContainer,
  ElBreadcrumb,
  ElHeader,
  ElRow,
  ElCol,
  ElInput,
  ElButton,
  ElDatePicker,
} from 'element-plus';

export default defineComponent({
  name: "start-page",
  setup() {
    const dateRange = ref<[number, number]>()
    const textQuery = ref<string>()
    return {dateRange, textQuery}
  },
  components: {
    ElContainer,
    ElBreadcrumb,
    ElHeader,
    ElRow,
    ElCol,
    ElInput,
    ElButton,
    ElDatePicker,
  }
});
</script>