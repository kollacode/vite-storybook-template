import { UploadFile } from "element-plus/lib/el-upload/src/upload.type";

export const file1: UploadFile = {
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