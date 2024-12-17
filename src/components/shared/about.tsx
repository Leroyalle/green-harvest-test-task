import clsx from 'clsx';
import React from 'react';
import { Typography } from '../ui';

interface Props {
  className?: string;
}

export const About: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx('text-white', className)}>
      <div className="px-5 tablet:px-8 pb-10 tablet:pb-[50px]">
        <h2 className="uppercase font-semibold mb-5 tablet:mb-[25px] text-5xl tablet:text-[76px] leading-[48px] tablet:leading-[76px] tracking-tight">
          organic vegetables to your diet today!
        </h2>
        <Typography className="tablet:max-w-[603px]">
          Our expertly curated vegetable baskets are made with the freshest, highest quality
          vegetables available. Fresh Harvest Box has got you covered. Fresh, high-quality
          vegetables in expertly curated vegetable baskets delivered to you.
        </Typography>
      </div>
      <img
        className="w-full object-cover max-h-[370px] tablet:max-h-[539px]"
        src="/img/assets/about.jpeg"
        alt="veggies"
      />
    </section>
  );
};
