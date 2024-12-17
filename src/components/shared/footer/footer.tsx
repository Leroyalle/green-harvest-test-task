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
      className={clsx('bg-secondary px-5 py-10 text-light flex flex-col gap-y-20', className)}>
      <div className="flex flex-col gap-y-10 max-w-[296px]">
        <Heading />
        <div className="flex flex-col gap-y-10 max-w-[215px]">
          <NavList />
          <Contacts />
        </div>
      </div>
      <Copyright />
    </footer>
  );
};
