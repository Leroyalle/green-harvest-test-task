import clsx from 'clsx';
import React from 'react';
import { Typography } from '../../../ui';

interface Props {
  name: string;
  avatarUrl: string;
  text: string;
  className?: string;
}

export const ReviewAuthor: React.FC<Props> = ({ name, avatarUrl, text, className }) => {
  return (
    <div className={clsx('flex flex-col items-center', className)}>
      <div className="w-14 h-14 border-1 border-dashed border-gray-400 mb-6">
        <img className="w-full h-full rounded-full" src={avatarUrl} alt={name} />
      </div>
      <h4 className="text-base font-semibold leading-[110%] mb-2">{name}</h4>
      <Typography className="text-gray-400 leading-[140%] text-center">{text}</Typography>
    </div>
  );
};