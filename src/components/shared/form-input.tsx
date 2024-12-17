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
    formState: { errors },
    watch,
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
              'w-full h-12 text-sm tablet:text-base outline-1 outline outline-[#14141433] rounded-[30px] px-4 py-[14px]',
              inputStyles,
            )}
            {...register(name)}
            {...props}
            disabled={loading}
          />
        </div>
        {/* {errorText && <p className="absolute text-red-500">{errorText}</p>} */}
      </div>
    </div>
  );
};
