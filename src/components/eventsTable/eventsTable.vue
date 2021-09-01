<template>
  <ElTable :data="tableData">
    <ElTableColumn type="expand" #="{row: {loads}}">
      <ElRow v-for="load of loads">
        <ElCol :span="12">{{load.status}}</ElCol>
        <ElCol :span="12">{{load.spreadsheetName}}</ElCol>
      </ElRow>
    </ElTableColumn>
    <ElTableColumn 
      label="Event Name"
      prop="eventName"
    />
    <ElTableColumn 
      label="Event ID"
      prop="eventId"
    />
  </ElTable>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {briefs} from '@/_mocks/events';
import {
  ElTable,
  ElTableColumn,
  ElRow,
  ElCol,
} from 'element-plus';
export default defineComponent({
  name:"events-table",
  setup() {
    const tableData = briefs
    return {tableData}
  },
  components: {
    ElTable,
    ElTableColumn,
    ElRow,
    ElCol,
  }
});
</script>