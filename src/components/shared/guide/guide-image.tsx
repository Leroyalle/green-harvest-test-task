import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const GuideImage: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        'bg-secondary px-5 tablet:px-16 py-10 tablet:py-[100px] laptop:p-[100px]',
        className,
      )}>
      <img
        src="/img/assets/guide.jpeg"
        alt="veggies"
        className="w-full h-full rounded-[30px] object-cover m-auto"
      />
    </div>
  );
};
