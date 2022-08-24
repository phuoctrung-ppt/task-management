import React, { FC } from 'react';
import { IconType } from './Icon.type';
export const Cross: FC<IconType> = ({ color }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7588 6.40585C19.0804 6.08424 19.0804 5.56281 18.7588 5.24121C18.4372 4.9196 17.9158 4.9196 17.5941 5.24121L12 10.8354L6.40585 5.24121C6.08424 4.9196 5.56281 4.9196 5.24121 5.24121C4.9196 5.56281 4.9196 6.08424 5.24121 6.40585L10.8354 12L5.24121 17.5941C4.9196 17.9158 4.9196 18.4372 5.24121 18.7588C5.56281 19.0804 6.08424 19.0804 6.40585 18.7588L12 13.1646L17.5941 18.7588C17.9158 19.0804 18.4372 19.0804 18.7588 18.7588C19.0804 18.4372 19.0804 17.9158 18.7588 17.5941L13.1646 12L18.7588 6.40585Z"
        fill={color}
      />
    </svg>
  );
};
export default Cross;