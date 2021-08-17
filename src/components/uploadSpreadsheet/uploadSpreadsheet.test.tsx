import { mount } from "@vue/test-utils";
import UploadSpreadsheet from "./uploadSpreadsheet.vue";

test("hello world", async () => {
  const wrapper = mount(UploadSpreadsheet);
  expect(wrapper.html()).toMatchSnapshot();
});