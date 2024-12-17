import clsx from 'clsx';
import React from 'react';

interface Props {
  name: string;
  pricePerKg: string;
  imageUrl: string;
  className?: string;
}

export const Vegetable: React.FC<Props> = ({ name, pricePerKg, imageUrl, className }) => {
  return (
    <div className={clsx('bg-light px-[26px] py-8 rounded-[40px] tracking-tight', className)}>
      <h4 className="text-secondary text-[28px] lowercase font-semibold mb-3">{name}</h4>
      <span className="text-dark text-sm font-semibold uppercase block mb-[14px]">
        {pricePerKg}
      </span>
      <img className="border-1 border-dashed border-gray-400" src={imageUrl} alt={name} />
    </div>
  );
};
