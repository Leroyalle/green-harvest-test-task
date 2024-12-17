import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const FooterNavList: React.FC<Props> = ({ className }) => {
  return (
    <ul className={clsx('flex flex-col gap-y-[14px]', className)}>
      <li className="text-[28px] leading-[28px] font-semibold">
        <a href="#how">how it works</a>
      </li>
      <li className="text-[28px] leading-[28px] font-semibold">
        <a href="#vegetables">vegetables</a>
      </li>
      <li className="text-[28px] leading-[28px] font-semibold">
        <a href="#reviews">reviews</a>
      </li>
    </ul>
  );
};
