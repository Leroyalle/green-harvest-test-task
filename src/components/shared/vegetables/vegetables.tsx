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
    <section
      className={clsx(
        'bg-secondary px-5 tablet:px-8 py-20 tablet:py-[100px] desktop:p-[100px] text-white',
        className,
      )}
      id="vegetables">
      <h2 className="uppercase tracking-tight text-[48px] tablet:text-[64px] leading-[50px] tablet:leading-[64px] font-semibold mb-5 tablet:mb-[50px] desktop:mb-[25px]">
        organic <br className="hidden tablet:block" /> <Highlighted>vegetables</Highlighted>
      </h2>
      <Typography className="mb-10 tablet:mb-[50px]">
        Our organic vegetables are hand-picked from local farms and delivered straight to your{' '}
        <br className="hidden tablet:block" />
        doorstep, ensuring that you get the freshest and most nutritious produce possible.
      </Typography>
      <VegetablesList items={vegetablesData} />
    </section>
  );
};
