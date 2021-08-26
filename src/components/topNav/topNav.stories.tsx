import {Story, Meta} from '@storybook/vue3';
import topNav from './topNav.vue';
export default {
  title: "Example/Top Nav",
  component: topNav,
  argTypes: {},
  parameters: {
  jest: ["topNav.test.tsx"]
}
} as Meta

const template: Story = (args) => {
  return {
    render: () => <topNav {...args} />
  }
}

export const regular = template.bind({})