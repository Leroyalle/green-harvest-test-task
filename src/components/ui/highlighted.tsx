import clsx from 'clsx';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const Highlighted: React.FC<Props> = ({ children, className }) => {
  return <span className={clsx('opacity-50', className)}>{children}</span>;
};
