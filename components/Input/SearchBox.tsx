import React from 'react';
import styled from 'styled-components';
import { color } from '../../utils';
import { OverrideProps } from '../../utils/interface';
import { Search } from '../Icons';
const StyledInput = styled.input<InputType>`
  display: block;
  border-radius: 0.25rem;
  border-width: 1px;
  padding-left: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
`;
const IconWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: 1.5rem;
`;

type InputType = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const SearchBox = ({ onChange, value, ...resProps }: OverrideProps<InputType>) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Search color={color.gray1} />
      </IconWrapper>
      <StyledInput {...resProps} onChange={onChange} value={value} />
    </Wrapper>
  );
};
