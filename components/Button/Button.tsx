import React from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import color from '../../utils/color';
import typography from '../../utils/typography-color';

interface ButtonProps {
  backgroundColor?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const VARIANT_MAPPING: { [key: string]: { [key: string]: string | number } } = {
  primary: {
    background: color.primary,
    hover: color.greenDark,
    text: color.white,
  },
  secondary: {
    background: color.gray5,
    hover: color.gray4,
    text: color.gray1,
  },
  danger: {
    background: color.red,
    hover: color.redDark,
    text: color.white,
  },
};

const SIZE_MAPPING: {
  [key: string]: { [key: string]: FlattenSimpleInterpolation | number | string };
} = {
  large: {
    padding: '0 2rem',
    height: '2.5rem',
    typography: typography.size.large,
  },
  medium: {
    padding: '0 1.25rem',
    height: '2rem',
    typography: typography.size.medium,
  },
  small: {
    padding: '0 1rem',
    heigh: '1rem',
    typography: typography.size.small,
  },
};

const ButtonStyled = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  border: 0;
  border-radius: 2rem;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  ${({ variant, disabled }) => {
    if (disabled) {
      return `
        background-color: ${color.gray4};
        color: ${color.gray2};
      `;
    }
    const { hover, background, text } = VARIANT_MAPPING[variant ?? 'primary'];
    return `
      background: ${background};
      text: ${text};
      :hover{
        background: ${hover};
        cursor: pointer;
      }
    `;
  }}
  ${({ size }) => {
    const { height, padding, typography } = SIZE_MAPPING[size ?? 'medium'];
    return `
      height: ${height};
      padding: ${padding};
      ${typography}
    `;
  }}
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ size, variant, disabled, onClick, label, ...props }: ButtonProps) => {
  return (
    <ButtonStyled
      label={label}
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={() => !disabled && onClick}
      {...props}
    >
      {label}
    </ButtonStyled>
  );
};
