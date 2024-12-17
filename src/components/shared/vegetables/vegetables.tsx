import clsx from 'clsx';
import React from 'react';
import { Typography, Highlighted } from '../../ui';
import { VegetablesList } from './vegetables-list';
import { vegetablesData } from '../../../constants';

interface Props {
  className?: string;
}

export const Vegetables: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx('bg-secondary px-5 py-20  text-white', className)} id="vegetables">
      <h2 className="uppercase tracking-tight text-[48px] leading-[50px] font-semibold mb-5">
        organic <Highlighted>vegetables</Highlighted>
      </h2>
      <Typography className="mb-10">
        Our organic vegetables are hand-picked from local farms and delivered straight to your
        doorstep, ensuring that you get the freshest and most nutritious produce possible.
      </Typography>
      <VegetablesList items={vegetablesData} />
    </section>
  );
};
