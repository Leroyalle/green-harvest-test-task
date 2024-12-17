import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const Copyright: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        'text-xs tablet:text-lg leading-4 tablet:leading-5 font-medium flex items-center justify-between text-light/50',
        className,
      )}>
      <p>
        <a href="!#">Privacy Policy</a> <span className="mx-2">/</span>
        <a href="!#">Cookie settings</a>
      </p>
      <a href="!#">©Green Harvest 2023</a>
    </div>
  );
};
