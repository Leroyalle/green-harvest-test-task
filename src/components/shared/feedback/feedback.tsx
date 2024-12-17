import clsx from 'clsx';
import React from 'react';
import { Highlighted, Typography } from '../../ui';
import { FeedbackForm } from './forms';
import { SocialCard } from './social';

interface Props {
  className?: string;
}

export const Feedback: React.FC<Props> = ({ className }) => {
  return (
    <section
      className={clsx(
        'bg-secondary py-20 tablet:py-[100px] desktop:py-[100px] text-light',
        className,
      )}
      id="feedback">
      <div className="px-5 tablet:pl-8 tablet:pr-24 desktop:px-[100px] mb-10 tablet:mb-[50px]">
        <h2 className="uppercase text-5xl tablet:text-[64px] font-semibold leading-[50px] tablet:leading-[64px] text-left mb-[29px] tablet:mb-[25px]">
          Fresh <Highlighted>Harvest</Highlighted> Box <br className="hidden tablet:block" /> has
          got you <br className="hidden tablet:block desktop:hidden" />
          covered
        </h2>
        <Typography>
          Our boxes are packed with delicious, nutritious vegetables, perfect for anyone looking to
          eat healthier or <br className="hidden desktop:block" /> support local farmers. Order your
          box today and start enjoying the best that nature has to offer!
        </Typography>
      </div>
      <div className="flex flex-col desktop:flex-row gap-y-5 desktop:gap-x-6 tablet:gap-y-[25px] px-5 tablet:px-[70px] desktop:px-[100px]">
        <FeedbackForm className="flex-1" />
        <SocialCard className="flex-1" />
      </div>
    </section>
  );
};
