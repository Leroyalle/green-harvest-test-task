import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const FooterNavList: React.FC<Props> = ({ className }) => {
  return (
    <ul className={clsx('flex flex-col gap-y-[14px] desktop:gap-y-[25px]', className)}>
      <li className="text-[28px] tablet:text-[32px] leading-[28px] tablet:leading-[32px] font-semibold">
        <a href="#guide" className="transition-all hover:text-light/40">
          how it works
        </a>
      </li>
      <li className="text-[28px] tablet:text-[32px] leading-[28px] tablet:leading-[32px] font-semibold">
        <a href="#vegetables" className="transition-all hover:text-light/40">
          vegetables
        </a>
      </li>
      <li className="text-[28px] tablet:text-[32px] leading-[28px] tablet:leading-[32px] font-semibold">
        <a href="#reviews" className="transition-all hover:text-light/40">
          reviews
        </a>
      </li>
    </ul>
  );
};
