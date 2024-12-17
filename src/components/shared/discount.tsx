import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const Discount: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx('bg-light px-[10px] py-20', className)}>
      <h2 className="sr-only">Discount</h2>
      <h3 className="text-white uppercase text-5xl tablet:text-[64px] leading-[50px] tablet:leading-[70px] font-semibold tracking-tight bg-primary px-[10px] py-[3px] rounded-xl">
        Discount up to 40%!
      </h3>
      <p className="uppercase text-5xl whitespace-pre-line tablet:text-[64px] leading-[50px] tablet:leading-[70px] font-semibold tracking-tighter px-[10px]">
        Taste the vitamins <br className="hidden tablet:block" />
        and keep your <br className="hidden tablet:block" />
        health
      </p>
    </section>
  );
};
