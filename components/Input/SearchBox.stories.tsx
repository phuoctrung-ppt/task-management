import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { SearchBox } from './SearchBox';

export default {
  title: 'Template/SearchBox',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>;
// eslint-disable-next-line react-hooks/rules-of-hooks

const Template: ComponentStory<typeof SearchBox> = () => {
  const [value, setValue] = useState('');
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setValue(event.target?.value);
  };
  return <SearchBox placeholder='Input search here' onChange={changeInput} value={value} />;
};

export const Default = Template.bind({});
