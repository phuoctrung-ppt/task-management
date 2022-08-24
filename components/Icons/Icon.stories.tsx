/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentMeta } from '@storybook/react';
import * as Icons from '.';
import colors from '../../utils/color';
import { Grid } from '../Grid';
import React from 'react';
export default {
  title: 'Example/Icon',
  component: Icons,
} as unknown as ComponentMeta<any>;

const Template = () => {
  <Grid>
    <h1>HAhaha</h1>
  </Grid>;
};

export const Default = Template.bind({});
