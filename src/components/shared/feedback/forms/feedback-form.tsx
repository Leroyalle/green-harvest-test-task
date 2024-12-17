import clsx from 'clsx';
import React from 'react';
import { FormInput } from '../../form-input';
import { FormTextarea } from '../../form-textarea';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../../../ui';

interface Props {
  className?: string;
}

export const FeedbackForm: React.FC<Props> = ({ className }) => {
  const form = useForm({
    defaultValues: {
      fullName: '',
    },
  });
  return (
    <FormProvider {...form}>
      <form className={clsx('bg-light rounded-[30px] px-5 py-10', className)}>
        <h3 className="uppercase font-semibold text-black text-2xl leading-[26px] mb-10">
          Ordering <span className="text-secondary">from us</span> is quick and easy! Fill out{' '}
          <span className="text-primary">the form</span> below and we will contact you !
        </h3>
        <div className="flex flex-col gap-y-[15px] mb-5">
          <FormInput name={'fullName'} placeholder="Full Name" />
          <FormInput name={'email'} placeholder="Email" />
          <FormTextarea name={'comment'} placeholder="Comment" />
        </div>
        <Button
          color="primary"
          className="w-full py-4 rounded-[30px] text-small leading-[18px] font-semibold">
          SEND
        </Button>
      </form>
    </FormProvider>
  );
};
