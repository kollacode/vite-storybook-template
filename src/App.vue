<template>
<ElContainer direction="vertical">
  <top-nav/>
  <ElMain>
    ... And the rest...
  </ElMain>
</ElContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  ElContainer,
  ElMain,
} from 'element-plus';
import topNav from '@/components/topNav';
export default defineComponent({
name: 'App',
data() {
    return {
      
    }
  },
  components: {
    ElContainer,
    ElMain,
    topNav
  }
});
</script>

