import React, { FC } from 'react';
import { IconType } from './Icon.type';
export const CheckedBox: FC<IconType> = ({ color }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4C6.23858 4 4 6.23858 4 9V15C4 17.7614 6.23858 20 9 20H15C17.7614 20 20 17.7614 20 15V9C20 6.23858 17.7614 4 15 4H9ZM10.5 13.1896L15.2198 8.46981C15.514 8.18558 15.9818 8.18965 16.2711 8.47895C16.5604 8.76825 16.5645 9.23603 16.2803 9.53031L11.0303 14.7803C10.7374 15.0731 10.2626 15.0731 9.96976 14.7803L7.71976 12.5303C7.43553 12.236 7.4396 11.7682 7.7289 11.4789C8.0182 11.1896 8.48598 11.1856 8.78026 11.4698L10.5 13.1896Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckedBox;
