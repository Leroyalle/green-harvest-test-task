import clsx from 'clsx';
import React from 'react';
import { Typography } from '../ui';

interface Props {
  className?: string;
}

export const About: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx('text-white', className)}>
      <div className="px-5 pb-10">
        <h2 className="uppercase mb-5 font-semibold text-5xl leading-[48px] tracking-tight tablet:text-[76px] tablet:leading-[76px]">
          organic vegetables to your diet today!
        </h2>
        <Typography className="tablet:max-w-[603px]">
          Our expertly curated vegetable baskets are made with the freshest, highest quality
          vegetables available. Fresh Harvest Box has got you covered. Fresh, high-quality
          vegetables in expertly curated vegetable baskets delivered to you.
        </Typography>
      </div>
      <img
        className="w-full object-cover mobile:max-h-[539px]"
        src="/img/assets/about.jpeg"
        alt="veggies"
      />
    </section>
  );
};
