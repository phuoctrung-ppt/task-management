import { IconType } from './Icon.type';
import React from 'react';

const Subtract = ({ color }: IconType) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.4129 6.29395C11.6478 6.06016 11.6486 5.68026 11.4148 5.44543C11.181 5.21059 10.8011 5.20975 10.5663 5.44355L6.71103 9.2818L5.43616 7.99163C5.20325 7.75592 4.82336 7.75366 4.58765 7.98657C4.35194 8.21948 4.34967 8.59937 4.58259 8.83508L6.28076 10.5536C6.39289 10.6671 6.54558 10.7313 6.7051 10.7319C6.86462 10.7326 7.01783 10.6697 7.13088 10.5571L11.4129 6.29395Z"
        fill={color}
      />
    </svg>
  );
};

export default Subtract;
