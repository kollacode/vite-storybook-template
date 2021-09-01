<template>
  <h1>Events in progress</h1>
  <displayFilter
    v-model:date-range="dateRange"
    v-model:text-query="textQuery"
  />
  <EventsTable></EventsTable>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import displayFilter from '@/components/displayFilter';
import EventsTable from '@/components/eventsTable';

export default defineComponent({
  name: "start-page",
  setup() {
    const dateRange = ref<[Date, Date]>()
    const textQuery = ref<string>()
    return {dateRange, textQuery}
  },
  components: {
    displayFilter,
    EventsTable,
  }
});
</script>