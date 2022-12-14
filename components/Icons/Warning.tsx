import React, { FC } from 'react';
import { IconType } from './Icon.type';
export const Warning: FC<IconType> = ({ color }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2845 4.44225L4.08548 18.8422C3.81955 19.3741 4.20632 20 4.80097 20H19.199C19.7937 20 20.1805 19.3741 19.9145 18.8422L12.7155 4.44225C12.4207 3.85258 11.5793 3.85258 11.2845 4.44225ZM11.3622 11.7941H12.6358V15.1919H11.3622V11.7941ZM11.3622 16.324H12.6358V17.4562H11.3622V16.324Z"
        fill={color}
      />
    </svg>
  );
};
export default Warning;
