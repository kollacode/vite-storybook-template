<template>
  <h1>Events in progress</h1>
  <displayFilter
    v-model:date-range="dateRange"
    v-model:text-query="textQuery"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import displayFilter from '@/components/displayFilter';

export default defineComponent({
  name: "start-page",
  setup() {
    const dateRange = ref<[Date, Date]>()
    const textQuery = ref<string>()
    return {dateRange, textQuery}
  },
  components: {
    displayFilter,
  }
});
</script>