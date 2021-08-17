<template>
  <el-upload
  :file-list="fileList"
  :on-change="onChange"
  :on-remove="onChange"
  :auto-upload="false"
  multiple
  drag
  action=""
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
import { useMutableProps } from '@/use/mutableProps';

/**
 * Displays a file uploader, which allows drag and drop
 */
export default defineComponent({
  props: {
    /** The list of files already uploaded*/
    fileList: {
      type: Array as PropType<UploadFile[]>,
      default: () => []
    }
  },
  emits: [
    /**
     * Push change to fileList of type `UploadFile[]`
     * @type {UploadFile[]}
     */
    "update:fileList"
  ],
  setup(props, {emit}) {
    const { fileList } = useMutableProps(props, emit)
    const onChange = (_file: UploadFile, fl: UploadFile[]) => {
      fileList.value = [...fl]
    }
    return {fileList, onChange}
  },
  components: {ElUpload}
})
</script>