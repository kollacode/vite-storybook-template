<template>
<ElContainer direction="vertical">
  <top-nav/>
  <ElMain>
    <startPage/>
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
import startPage from '@/views/start';
export default defineComponent({
name: 'App',
data() {
    return {
      
    }
  },
  components: {
    ElContainer,
    ElMain,
    topNav,
    startPage
  }
});
</script>

