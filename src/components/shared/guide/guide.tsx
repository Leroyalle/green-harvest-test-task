import React from 'react';
import { GuideImage as Image } from './guide-image';
import { GuideSteps as Steps } from './steps';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export const Guide: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx('bg-primary laptop:grid grid-cols-2', className)} id="guide">
      <h2 className="sr-only">Guide</h2>
      <Image />
      <Steps />
    </section>
  );
};
