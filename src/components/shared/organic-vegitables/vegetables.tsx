import clsx from 'clsx';
import React from 'react';
import { Typography, Highlighted } from '../../ui';

interface Props {
  className?: string;
}

export const VegetablesList: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx('bg-secondary px-5 py-20', className)}>
      <h2 className="uppercase tracking-tight text-[48px] leading-[50px] font-semibold mb-5">
        organic <Highlighted>vegetables</Highlighted>
      </h2>
      <Typography>
        Our organic vegetables are hand-picked from local farms and delivered straight to your
        doorstep, ensuring that you get the freshest and most nutritious produce possible.
      </Typography>
    </section>
  );
};
