import styled from 'styled-components';
import { OverrideProps } from '../../utils/interface';
import { Box } from '../Box/Box';
type ItemType = {
  span?: string | number;
  start?: string | number;
};

const StyledItem = styled.div<ItemType>`
//   grid-column: ${({ span }) => `span ${span}`};
  grid-column-start: ${({ start }) => start};
  grid-column-end: ${({ span }) => `span ${span}`};
  grid-auto-rows: minmax(min-content, max-content);
`;

export const Item = ({ span, start, children, ...resProps }: OverrideProps<ItemType>) => {
  return (
    <StyledItem span={span} start={start} {...resProps}>
      <Box>{children}</Box>
    </StyledItem>
  );
};
