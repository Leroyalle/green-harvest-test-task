import clsx from 'clsx';
import React from 'react';
import { Highlighted } from '../../../ui';

interface Props {
  className?: string;
}

export const GuideBullets: React.FC<Props> = ({ className }) => {
  return (
    <ul className={clsx('flex flex-col gap-y-5', className)}>
      <li>
        <div className="py-3 pl-6 pr-[27px] bg-white rounded-[15px]">
          <div className="flex items-center gap-x-6">
            <div className="w-[52px] h-[52px] rounded-full p-[5px] flex-shrink-0 bg-secondary/20">
              <div className="bg-secondary rounded-full w-full h-full grid place-items-center text-xl">
                1
              </div>
            </div>
            <p className="font-medium text-black text-xs py-[5px] tracking-tight leading-[14px]">
              <Highlighted>Just choose</Highlighted> <b>the vegetable</b>{' '}
              <Highlighted>you want to order by clicking on the checkboxes</Highlighted>{' '}
              <b>next to it.</b>
            </p>
          </div>
        </div>
      </li>
      <li>
        <div className="py-3 pl-6 pr-[27px] bg-white rounded-[15px]">
          <div className="flex items-center gap-x-6">
            <div className="w-[52px] h-[52px] rounded-full p-[5px] flex-shrink-0 bg-secondary/20">
              <div className="bg-secondary rounded-full w-full h-full grid place-items-center text-xl">
                2
              </div>
            </div>
            <p className="font-medium text-black text-xs py-[5px] tracking-tight leading-[14px]">
              <Highlighted>Click on</Highlighted> <b>the basket</b>{' '}
              <Highlighted>
                {' '}
                and fill out the <br /> form.
              </Highlighted>
            </p>
          </div>
        </div>
      </li>
      <li>
        <div className="py-3 pl-6 pr-[27px] bg-white rounded-[15px]">
          <div className="flex items-center gap-x-6">
            <div className="w-[52px] h-[52px] rounded-full p-[5px] flex-shrink-0 bg-secondary/20">
              <div className="bg-secondary rounded-full w-full h-full grid place-items-center text-xl">
                3
              </div>
            </div>
            <p className="font-medium text-black text-xs py-[5px] tracking-tight leading-[14px]">
              <Highlighted>Sit back and relax! Your</Highlighted> <b>fresh vegetables</b>{' '}
              <Highlighted>basket will be delivered.</Highlighted>
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};
