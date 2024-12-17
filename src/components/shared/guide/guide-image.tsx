import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const GuideImage: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx('bg-secondary px-5 py-10', className)}>
      <img src="/img/assets/guide.jpeg" alt="veggies" className="w-full rounded-[30px]" />
    </div>
  );
};
