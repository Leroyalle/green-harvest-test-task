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
    formState: { errors },
    watch,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  return (
    <div className={clsx('text-black', className)}>
      <p className="font-medium">{label}</p>

      <div className="relative">
        <textarea
          cols={30}
          className="w-full text-sm tablet:text-base leading-[18px] tablet:leading-[20px] outline-1 outline outline-[#14141433] rounded-[30px] px-4 py-[14px]"
          {...register(name)}
          {...props}
        />
      </div>

      {/* {errorText && <p className="text-red-500 text-sm mt-2">{errorText}</p>} */}
    </div>
  );
};
