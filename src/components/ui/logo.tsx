import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx('flex items-center gap-x-2', className)}>
      <img src="/img/logo-image.svg" />
      <img src="/img/logo-text.svg" />
    </div>
  );
};
