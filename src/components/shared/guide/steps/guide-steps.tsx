import clsx from 'clsx';
import React from 'react';
import { Typography, Highlighted } from '../../../ui';
import { GuideBullets as Bullets } from './guide-bullets';

interface Props {
  className?: string;
}

export const GuideSteps: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx('bg-primary text-white px-5 py-20 flex flex-col gap-y-10', className)}>
      <div className="">
        <h3 className="uppercase font-semibold text-[28px] mb-5 leading-[28px] tracking-tight">
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
