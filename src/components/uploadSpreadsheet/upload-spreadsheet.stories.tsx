import uploadSpreadsheet from './uploadSpreadsheet.vue';
import {Story, Meta} from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { UploadFile } from 'element-plus/lib/el-upload/src/upload.type';
import { file1 } from './_mock_files';
export default {
  component: uploadSpreadsheet,
  title: "Example/Upload Spreadsheet",
  argTypes: { "onUpdate:fileList": { } },
} as Meta

const uploadTemplate: Story = (args) => {
  return { render:() => <uploadSpreadsheet 
    {...args}
  />}
}

export const withSingleFile = uploadTemplate.bind({})
withSingleFile.args = {
  fileList: [file1]
}