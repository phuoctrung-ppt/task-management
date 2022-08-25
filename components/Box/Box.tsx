/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { color } from '../../utils';
const StyledBox = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0px 0px 0.5rem rgba(17, 17, 26, 0.1);
  background-color: ${color.white};
  padding: 1.5rem;
  overflow-wrap: anywhere;
`;

interface IBox {
  children?: React.ReactNode;
}

export const Box = (props: HTMLAttributes<unknown> & IBox) => {
  return <StyledBox {...props} />;
};
