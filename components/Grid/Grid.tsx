import styled from 'styled-components';

import { Item } from './Item';

interface IGrid {
  children?: React.ReactNode;
  gap?: number | string;
}

const StyledGrid = styled.div<IGrid>`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  ${({ gap }) => {
    return `
    gap: ${gap}px;
    `
  }}
`;

export const Grid = (props: IGrid) => {
  return <StyledGrid gap={props.gap}>{props.children}</StyledGrid>;
};

Grid.Item = Item;

export default Grid;
