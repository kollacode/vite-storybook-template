<template>
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
import { defineComponent, PropType, ref } from 'vue';
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
import { useMutableProps } from '@/use/mutableProps';

export default defineComponent({
  name: "display-filter",
  emits : [
    "update:dateRange",
    "update:textQuery",
  ],
  props: {
    dateRange: {
      type: Object as PropType<[Date, Date]>,
      validator: ((v: unknown) => {
        return Array.isArray(v) && v.length === 2 && v.every(p => p instanceof Date)
      }) as any
    },
    textQuery: {
      type: String
    }
  },
  setup(props, {emit}) {
    const {dateRange, textQuery} = useMutableProps(props, emit)
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