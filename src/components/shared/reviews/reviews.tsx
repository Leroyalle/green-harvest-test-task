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
    <section
      className={clsx('bg-light px-5 tablet:px-8 py-20 tablet:py-[100px]', className)}
      id="reviews">
      <h2 className="uppercase text-black text-5xl tablet:text-[64px] font-semibold leading-[50px] tablet:leading-[64px] text-left mb-5 tablet:mb-[25px]">
        reviews from <br className="hidden tablet:block" /> our{' '}
        <span className="text-primary">customers</span>
      </h2>
      <Typography className="leading-5 mb-10 tablet:mb-[50px]">
        Words of our customers: impressions and opinions about the quality of our services and the
        freshness of our products.
      </Typography>
      <ReviewsList items={reviewsData} />
    </section>
  );
};
