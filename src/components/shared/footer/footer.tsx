import clsx from 'clsx';
import React from 'react';
import {
  FooterHeading as Heading,
  FooterNavList as NavList,
  FooterContacts as Contacts,
  Copyright,
} from './blocks';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer
      className={clsx(
        'bg-secondary px-5 desktop:px-[100px] py-10 desktop:py-[50px] text-light',
        className,
      )}>
      <div className="flex desktop:grid desktop:grid-cols-2 flex-col tablet:flex-row justify-between gap-y-10 w-full mb-20 tablet:mb-[100px] desktop:mb-[125px]">
        <Heading />
        <div className="flex flex-col desktop:grid desktop:grid-cols-2 gap-y-10 tablet:gap-y-16 max-w-[215px] desktop:max-w-none">
          <NavList className="w-full" />
          <Contacts className="w-full desktop:items-end" />
        </div>
      </div>
      <Copyright />
    </footer>
  );
};
