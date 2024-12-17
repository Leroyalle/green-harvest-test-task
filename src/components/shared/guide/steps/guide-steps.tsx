import clsx from 'clsx';
import React from 'react';
import { Typography, Highlighted } from '../../../ui';
import { GuideBullets as Bullets } from './guide-bullets';

interface Props {
  className?: string;
}

export const GuideSteps: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        'bg-primary text-white px-5 tablet:px-[159px] laptop:px-[100px] py-20 tablet:py-[100px]',
        className,
      )}>
      <div className="mb-10 tablet:mb-[50px]">
        <h3 className="uppercase font-semibold text-[28px] tablet:text-[32px] mb-5 tablet:mb-[25px] leading-[28px] tablet:leading-[32px] tracking-tight">
          To order your <Highlighted>vegetable</Highlighted> basket, simply follow these{' '}
          <Highlighted>easy steps</Highlighted>
        </h3>
        <Typography>
          Our baskets are assembled with care and delivered straight to your doorstep, so you can
          enjoy the taste of fresh fruit without ever leaving your home.
        </Typography>
      </div>
      <Bullets />
    </div>
  );
};
