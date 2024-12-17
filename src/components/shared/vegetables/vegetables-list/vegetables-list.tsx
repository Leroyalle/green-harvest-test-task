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
    <ul className={clsx('flex flex-col gap-y-5', className)}>
      {items.map((item) => (
        <Vegetable name={item.name} pricePerKg={item.pricePerKg} imageUrl={item.imageUrl} />
      ))}
    </ul>
  );
};
