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
    <section className={clsx('bg-secondary px-5 py-20 text-light', className)}>
      <h2 className="uppercase text-5xl font-semibold leading-[50px] text-left mb-[29px]">
        Fresh <Highlighted>Harvest</Highlighted> Box has got you covered
      </h2>
      <Typography className="mb-10">
        Our boxes are packed with delicious, nutritious vegetables, perfect for anyone looking to
        eat healthier or support local farmers. Order your box today and start enjoying the best
        that nature has to offer!
      </Typography>
      <div className="flex flex-col gap-y-5">
        <FeedbackForm />
        <SocialCard />
      </div>
    </section>
  );
};
