import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const FooterContacts: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx('flex flex-col gap-y-4', className)}>
      <p className="text-sm tablet:text-lg leading-[18px] tablet:leading-5 font-semibold">
        <a href="tel:380684439426">+380 (68) 443-94-26</a>
      </p>
      <address className="text-sm tablet:text-lg leading-[18px] tablet:leading-5 font-semibold not-italic">
        1678 S. Pioneer Road Salt <br /> Lake City UT 84104
      </address>
    </div>
  );
};
