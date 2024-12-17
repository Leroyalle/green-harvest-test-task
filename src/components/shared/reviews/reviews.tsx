import React from 'react';
import clsx from 'clsx';
import { Typography } from '../../ui';
import { ReviewsList } from './reviews-list';
import { reviewsData } from '../../../constants';

interface Props {
  className?: string;
}

export const Reviews: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx('bg-light px-5 py-20', className)}>
      <h2 className="uppercase text-black text-5xl font-semibold leading-[50px] text-left mb-5">
        reviews from our <span className="text-primary">customers</span>
      </h2>
      <Typography className="leading-5 mb-10">
        Words of our customers: impressions and opinions about the quality of our services and the
        freshness of our products.
      </Typography>
      <ReviewsList items={reviewsData} />
    </section>
  );
};
