// Button.stories.ts

import { Meta, Story } from '@storybook/angular';

import ButtonComponent from "../app/shared/components/button/button.component";

export default {
  title: 'Button',
  component: ButtonComponent,
};

export const Primary: Story = () => ({
  props: {
    label: 'Primary',
    backgroundColor: '#FB8C00',
    color: '#fff'
  }
});


export const Secondary: Story = () => ({
  props: {
    label: 'Secondary',
    backgroundColor: '#607D8B',
    color: '#fff'
  },
});

export const Custom: Story = (args) => ({
  props: args
});
