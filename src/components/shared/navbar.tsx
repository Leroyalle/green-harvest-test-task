import React from 'react';
import { Button, MenuDrawer } from '../ui';

export const Navbar: React.FC = () => {
  return (
    <>
      <MenuDrawer className="desktop:hidden" />
      <div className="hidden desktop:flex">
        <div className="flex items-center gap-x-2 mr-5">
          <a href="#guide">
            <Button
              className="p-3 rounded-xl text-base font-medium tracking-tight leading-5"
              color="transparent">
              How It works
            </Button>
          </a>
          <a href="#vegetables">
            <Button
              className="p-3 rounded-xl text-base font-medium tracking-tight leading-5"
              color="transparent">
              Vegetables
            </Button>
          </a>
          <a href="#reviews">
            <Button
              className="p-3 rounded-xl text-base font-medium tracking-tight leading-5"
              color="transparent">
              Reviews
            </Button>
          </a>
        </div>
        <a href="#feedback">
          <Button
            className="py-4 px-[32px] rounded-[30px] text-small leading-[18px] font-semibold m-auto"
            color="secondary">
            SHOW NOW
          </Button>
        </a>
      </div>
    </>
  );
};
