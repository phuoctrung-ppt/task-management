import React, { FC } from 'react';
import { IconType } from './Icon.type';
export const CheckboxCricle: FC<IconType> = ({ color }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM15.4129 10.294C15.6478 10.0602 15.6486 9.68026 15.4148 9.44543C15.181 9.21059 14.8011 9.20975 14.5663 9.44355L10.711 13.2818L9.43616 11.9916C9.20325 11.7559 8.82336 11.7537 8.58765 11.9866C8.35194 12.2195 8.34967 12.5994 8.58259 12.8351L10.2808 14.5536C10.3929 14.6671 10.5456 14.7313 10.7051 14.7319C10.8646 14.7326 11.0178 14.6697 11.1309 14.5571L15.4129 10.294Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckboxCricle;
