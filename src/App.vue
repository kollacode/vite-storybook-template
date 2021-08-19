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
import { defineComponent } from 'vue'
import {
  ElContainer,
  ElHeader,
  ElMain,
} from 'element-plus';
export default defineComponent({
  name: 'App',
  components: {
    ElContainer,
    ElHeader,
    ElMain,
  },
  data() {
    return {
      
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  background-color: aqua;
}
</style>
