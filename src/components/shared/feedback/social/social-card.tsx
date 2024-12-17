import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const SocialCard: React.FC<Props> = ({ className }) => {
  return (
    <article className={clsx('bg-primary rounded-[30px] px-5 py-10', className)}>
      <div className="border-1 border-dashed border-gray-400 mb-5">
        <img
          src="/img/assets/social.jpeg"
          alt="social card"
          className="object-cover rounded-[15px]"
        />
      </div>

      <p className="text-small font-semibold leading-[18px] text-light/50 mb-[14px]">
        Follow us on our social networks:
      </p>
      <p className="text-2xl leading-[26px] font-semibold">
        <a href="!#">instagram</a> / <a href="!#">facebook</a> / <a href="!#">youtube</a>
      </p>
    </article>
  );
};
