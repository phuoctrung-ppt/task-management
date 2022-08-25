import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from './Box';

export default {
  title: 'Example/Box',
  component: Box,
} as ComponentMeta<typeof Box>;
const Template: ComponentStory<typeof Box> = () => (
  <Box style={{ fontSize: '25px' }}>
    <h1>Title</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ad perferendis asperiores qui
      exercitationem earum fuga hic, eligendi, et quia ea maiores quisquam? Minus, doloribus ullam
      illum placeat inventore incidunt.
    </p>
  </Box>
);

export const BoxComponent = Template.bind({});
