import * as React from 'react';
import { IconType } from './Icon.type';

function SvgChevronRight({ color }: IconType) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 6l6 6-6 6" stroke={color} strokeWidth={1.5} strokeLinejoin="round" />
    </svg>
  );
}

export default SvgChevronRight;
