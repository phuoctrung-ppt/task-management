/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as Icons from '.';
import { color } from '../../utils';
import { Grid } from '../Grid';
export default {
  title: 'Example/Icon',
  component: Icons,
} as unknown as ComponentMeta<any>;

const Template: ComponentStory<any> = () => {
  return (
    <Grid gap={5}>
      {Object.entries(Icons).map(([iconName, Icon]) => {
        return (
          <>
            <Grid.Item
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
              key={iconName}
              span={4}
            >
              <Icon color={color.gray1} />
              {iconName}
            </Grid.Item>
          </>
        );
      })}
    </Grid>
  );
};

export const Default = Template.bind({});
