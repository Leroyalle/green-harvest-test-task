import React from 'react';
import { TReviewsData } from '../../../../constants';
import { ReviewAuthor } from './review-author';
import { useScreenDependentItems } from '../../../../utils';
import clsx from 'clsx';

interface Props {
  items: TReviewsData;
  className?: string;
}

export const ReviewsList: React.FC<Props> = ({ items, className }) => {
  const { visibleItems } = useScreenDependentItems(items);
  return (
    <ul className={clsx('flex flex-wrap gap-x-[18px]', className)}>
      {visibleItems.map((item, i) => (
        <li key={i}>
          <div className="border-1 h-full max-w-[343px] border-solid border-secondary rounded-3xl px-4 py-5 tablet:p-5">
            <ReviewAuthor name={item.name} avatarUrl={item.avatarUrl} text={item.text} />
          </div>
        </li>
      ))}
    </ul>
  );
};
