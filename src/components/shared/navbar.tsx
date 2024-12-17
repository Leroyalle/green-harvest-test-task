import React from 'react';
import { MenuDrawer } from '../ui';

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <>
      <MenuDrawer />
    </>
  );
};
