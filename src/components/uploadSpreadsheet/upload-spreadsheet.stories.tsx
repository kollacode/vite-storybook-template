import uploadSpreadsheet from './uploadSpreadsheet.vue';
import {Story, Meta} from '@storybook/vue3';
import { UploadFile } from 'element-plus/lib/el-upload/src/upload.type';
export default {
  component: uploadSpreadsheet,
  title: "Example/Upload Spreadsheet"
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
  return { render:() => <uploadSpreadsheet 
    file-list={[file]}
  />}
}