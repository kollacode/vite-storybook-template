<template>
  <ElHeader class="header">
    The Tool
  </ElHeader>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
  ElHeader
} from 'element-plus';
export default defineComponent({
  name: "top-nav",
  components: {
    ElHeader,
  },
});
</script>
<style lang="scss" scoped>
  @import '@carbon/type/scss/font-family';
  .header {
    font-family: carbon--font-family('sans');
    line-height: 54px;
    font-weight: 300;
    font-size: 1.5rem;
    letter-spacing: 0px;
    background-color: black;
    color: white;
  }
  </style>