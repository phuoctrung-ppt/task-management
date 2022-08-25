import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid } from './Grid';

export default {
  title: 'Example/Grid',
  component: Grid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <Grid.Item span={2}>2</Grid.Item>
    <Grid.Item span={6}>6</Grid.Item>
    <Grid.Item span={4}>4</Grid.Item>
    {[...new Array(4)].map((_: unknown, index: number) => (
      <Grid.Item key={index} span={3}>
        3
      </Grid.Item>
    ))}
    {[...new Array(2)].map((_: unknown, index: number) => (
      <Grid.Item key={index} span={6}>
        6
      </Grid.Item>
    ))}
    <Grid.Item span={12}>12</Grid.Item>
  </Grid>
);

export const GridTemplate = Template.bind({});

GridTemplate.args = {
  gap: 20,
};
