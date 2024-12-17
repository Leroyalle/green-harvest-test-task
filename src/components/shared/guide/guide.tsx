import React from 'react';
import { GuideImage as Image } from './guide-image';
import { GuideSteps as Steps } from './steps';

interface Props {
  className?: string;
}

export const Guide: React.FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <h2 className="sr-only">Guide</h2>
      <Image />
      <Steps />
    </section>
  );
};
