import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
}

export const SocialCard: React.FC<Props> = ({ className }) => {
  return (
    <article className={clsx('bg-primary rounded-[30px] px-5 py-10 tablet:p-[50px]', className)}>
      <div className="border-1 border-dashed border-gray-400 tablet:border-transparent mb-5 tablet:mb-[50px]">
        <img
          src="/img/assets/social.jpeg"
          alt="social card"
          className="object-cover rounded-[15px] w-full max-h-[273px]"
        />
      </div>

      <p className="text-sm tablet:text-lg font-semibold leading-[18px] tablet:leading-[20px] text-light/50 mb-[14px]">
        Follow us on our social networks:
      </p>
      <p className="flex flex-wrap gap-3 text-2xl tablet:text-[32px] leading-[26px] tablet:leading-[32px] font-semibold">
        <a href="#!" className="transition-all hover:text-light/40">
          instagram
        </a>
        /
        <a href="#!" className="transition-all hover:text-light/40">
          facebook
        </a>
        /
        <a href="#!" className="transition-all hover:text-light/40">
          youtube
        </a>
      </p>
    </article>
  );
};
