import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    // лендинг, нет смысла в ссылке
    <div className={clsx('flex items-center gap-x-2', className)}>
      <img src="/img/logo-image.svg" alt="logo" />
      <img src="/img/logo-text.svg" alt="Green Harvest" className="tablet:hidden" />
      <img src="/img/logo-text-big.svg" alt="Green Harvest" className="hidden tablet:block" />
    </div>
  );
};
