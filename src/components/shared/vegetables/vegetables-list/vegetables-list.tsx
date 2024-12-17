import clsx from 'clsx';
import React from 'react';
import { TVegetablesData } from '../../../../constants';
import { Vegetable } from './vegetable';

interface Props {
  items: TVegetablesData;
  className?: string;
}

export const VegetablesList: React.FC<Props> = ({ items, className }) => {
  return (
    <ul
      className={clsx(
        'flex flex-col items-center tablet:flex-row justify-between flex-wrap gap-5 desktop:gap-y-[28px]',
        className,
      )}>
      {items.map((item, i) => (
        <li key={i}>
          <Vegetable
            className="max-w-[346px]"
            name={item.name}
            pricePerKg={item.pricePerKg}
            imageUrl={item.imageUrl}
          />
        </li>
      ))}
    </ul>
  );
};
