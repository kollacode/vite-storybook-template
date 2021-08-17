import uploadSpreadsheet from '../components/uploadSpreadsheet.vue';
import {Story, Meta} from '@storybook/vue3';
import { createApp } from 'vue';
import { UploadFile } from 'element-plus/lib/el-upload/src/upload.type';
import 'element-plus/packages/theme-chalk/src/base.scss'
export default {
  component: uploadSpreadsheet,
  title: "Upload Spreadsheet"
} as Meta

export const withSingleFile: Story = () => {
  const file: UploadFile = {
    name: "MyFile",
    raw: Object.assign(new Blob(), {
      uid: 47,
      lastModifiedDate: +new Date(),
      lastModified: +new Date(),
      name: "MyFile"
    }),
    size: 0,
    status: 'success',
    uid: 47
  }
  return {
    template: `<upload-spreadsheet 
      :file-list="fileList"
    />`,
    data() {
      return {
        fileList: [file]
      }
    },
    components: {uploadSpreadsheet}
  }
}