import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Notification from './Notification';

export default {
  title: 'Example/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => {
  return <Notification type={args.type} message={args.message} />;
};

Template.args = {
  type: 'success',
  message: 'This is notification success',
};

export const Default = Template.bind({});
