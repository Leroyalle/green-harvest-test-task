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
      className={clsx(
        'w-full flex items-center justify-between p-5 pb-0 tablet:p-[30px] desktop:px-[100px] top-8 desktop:absolute z-50 desktop:border-y-1 desktop:border-dashed desktop:border-light',
        className,
      )}>
      <Logo />
      <Navbar />
    </header>
  );
};
