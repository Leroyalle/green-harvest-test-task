import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={clsx('max-w-screen-desktop mx-auto', className)}>{children}</div>;
};
