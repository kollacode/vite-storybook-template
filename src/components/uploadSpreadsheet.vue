<template>
  <el-upload
  class="upload-demo"
  action=""
  drag
  :file-list="fileList"
  multiple
  :auto-upload="false"
  :on-change="onChange"
  :on-remove="onChange"
>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
  <template #tip>
    <div class="el-upload__tip">
      jpg/png files with a size less than 500kb
    </div>
  </template>
</el-upload>
</template>

<script lang="ts">
import {ElUpload} from 'element-plus';
import { ref, Ref, defineComponent, PropType } from 'vue';
import { UploadFile } from 'element-plus/lib/el-upload/src/upload.type';
import { useMutableProps } from '../use/mutableProps';
import 'element-plus/packages/theme-chalk/src/base.scss'
export default defineComponent({
  props: {
    fileList: {
      type: Array as PropType<UploadFile[]>,
      default: () => []
    }
  },
  emits: ["update:fileList"],
  setup(props, {emit}) {
    const { fileList } = useMutableProps(props, emit)
    const onChange = (_file: UploadFile, fl: UploadFile[]) => {
      console.log("Mesa happy")
      fileList.value = [...fl]
    }
    return {fileList, onChange}
  },
  components: {ElUpload}
})
</script>

<style>

</style>