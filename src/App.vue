<template>
<ElContainer>
  <ElHeader class="header">
    My Header
  </ElHeader>
  <ElMain>
    ... And the rest...
  </ElMain>
</ElContainer>
</template>

<script lang="ts">
export default defineComponent({
name: 'App',
data() {
    return {
      
    }
  },
});
</script>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import {
  ElContainer,
  ElHeader,
  ElMain,
} from 'element-plus';
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
