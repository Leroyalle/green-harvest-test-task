import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const Discount: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx('bg-light px-[10px] py-20 desktop:p-[100px]', className)}>
      <h2 className="sr-only">Discount</h2>
      <p className="text-white uppercase text-5xl tablet:text-[64px] desktop:text-[76px] leading-[50px] tablet:leading-[70px] desktop:leading-[80px] font-semibold  bg-primary px-[10px] py-[3px] desktop:pr-0 desktop:pl-[13px] rounded-xl desktop:inline">
        Discount up to 40%!
      </p>
      <p className="uppercase text-5xl whitespace-pre-line tablet:text-[64px] desktop:text-[76px] leading-[50px] tablet:leading-[70px] desktop:leading-[80px] font-semibold px-[10px] desktop:inline">
        Taste the vitamins <br className="hidden tablet:block desktop:hidden" />
        and keep <br className="hidden desktop:block" /> your{' '}
        <br className="hidden tablet:block desktop:hidden" />
        health
      </p>
    </section>
  );
};
