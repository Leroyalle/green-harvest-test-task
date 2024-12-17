import clsx from 'clsx';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  loading?: boolean;
  inputStyles?: string;
  className?: string;
}

export const FormInput: React.FC<Props> = ({
  label,
  name,
  loading,
  inputStyles,
  className,
  ...props
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  return (
    <div className={clsx('flex justify-center flex-col gap-2 text-black', className)}>
      {label && <p className="font-medium ">{label}</p>}
      <div className="relative">
        <div className="relative">
          <input
            className={clsx(
              'w-full h-12 focus:outline-none tablet:h-[52px] text-sm tablet:text-base border-1 border-solid hover:border-secondary rounded-[30px] px-4 py-[14px] tablet:p-4',
              inputStyles,
              value
                ? errorText
                  ? 'focus:border-red-500 border-red-500'
                  : 'focus:border-green-400 border-green-400'
                : 'focus:border-[#14141433] border-[#14141433]',
            )}
            {...register(name)}
            {...props}
            disabled={loading}
          />
        </div>
      </div>
    </div>
  );
};
