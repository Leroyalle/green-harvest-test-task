import React from 'react';
import { Logo, MenuDrawer } from '../ui';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={clsx('flex items-center justify-between', className)}>
      <Logo />
      <MenuDrawer />
    </header>
  );
};
