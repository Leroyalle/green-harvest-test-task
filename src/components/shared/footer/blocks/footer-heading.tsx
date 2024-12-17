import React from 'react';
import { Logo, Typography } from '../../../ui';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export const FooterHeading: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx('flex flex-col gap-y-4 tablet:gap-y-[26px] max-w-[296px]', className)}>
      <Logo />
      <Typography>
        Whether you're looking for a healthy snack or a thoughtful gift, our fruit baskets are the
        perfect choice.
      </Typography>
    </div>
  );
};
