import clsx from 'clsx';
import React from 'react';

type ButtonColor = 'transparent' | 'light';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  className?: string;
}

export const Button: React.FC<Props> = ({ children, color = 'light', className, ...props }) => {
  const baseStyles = 'px-4 min-w-20 h-10 text-small gap-2 rounded-small';
  const mapColors = {
    transparent: 'text-[#fff] bg-transparent',
    light: 'bg-light text-secondary',
  } as const;

  return React.createElement(
    'button',
    { className: clsx(mapColors[color], baseStyles, className), ...props },
    children,
  );
};
