import React from 'react';
import { Logo } from '../ui';
import clsx from 'clsx';
import { Navbar } from './navbar';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={clsx('flex items-center justify-between p-5 pb-0 tablet:p-[30px]', className)}>
      <Logo />
      <Navbar />
    </header>
  );
};
