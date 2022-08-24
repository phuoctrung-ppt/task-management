import React, { FC } from 'react';
import { IconType } from './Icon.type';
export const Checkbox: FC<IconType> = ({ color }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 5.5H9C7.067 5.5 5.5 7.067 5.5 9V15C5.5 16.933 7.067 18.5 9 18.5H15C16.933 18.5 18.5 16.933 18.5 15V9C18.5 7.067 16.933 5.5 15 5.5ZM9 4C6.23858 4 4 6.23858 4 9V15C4 17.7614 6.23858 20 9 20H15C17.7614 20 20 17.7614 20 15V9C20 6.23858 17.7614 4 15 4H9Z"
        fill={color}
      />
    </svg>
  );
};