<template>
  <uploadSpreadsheet v-model:file-list="files"/>
</template>

<script lang="ts">
import { UploadFile } from 'element-plus/lib/el-upload/src/upload.type';
import { defineComponent } from 'vue'
import uploadSpreadsheet from '@/components/uploadSpreadsheet';
export default defineComponent({
  name: 'App',
  components: {uploadSpreadsheet},
  data() {
    return {
      files: [] as UploadFile[]
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
