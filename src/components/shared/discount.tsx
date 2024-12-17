import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const Discount: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx('bg-light px-[10px] py-20', className)}>
      <h2 className="sr-only">Discount</h2>
      <h3 className="text-white uppercase text-5xl font-semibold tracking-tight bg-primary px-[10px] py-[3px] rounded-xl">
        Discount up to 40%!
      </h3>
      <p className="uppercase text-5xl font-semibold tracking-tighter px-[10px] py-[3px]">
        Taste the vitamins and keep your health
      </p>
    </section>
  );
};
