import clsx from 'clsx';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  label?: string;
}

export const FormTextarea: React.FC<Props> = ({ className, name, label, ...props }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  return (
    <div className={clsx('text-black', className)}>
      <p className="font-medium">{label}</p>

      <div className="relative">
        <textarea
          className={clsx(
            'w-full resize-none focus:outline-none border-1 border-solid hover:border-secondary text-sm tablet:text-base leading-[18px] tablet:leading-[20px] outline-1 outline outline-[#14141433] rounded-[30px] px-4 py-[14px] h-[95px]',
            value
              ? errorText
                ? 'focus:border-red-500 border-red-500'
                : 'focus:border-green-400 border-green-400'
              : 'focus:border-[#14141433] border-[#14141433]',
          )}
          {...register(name)}
          {...props}
        />
      </div>
    </div>
  );
};
