'use client';

import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import { FormField } from './FormField';
import { cn } from '@/lib/utils';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  registration?: Partial<UseFormRegisterReturn>;
  error?: FieldError | string;
  hint?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  registration,
  error,
  hint,
  className,
  ...inputProps
}) => {
  return (
    <FormField label={label} error={error} hint={hint}>
      <input
        {...registration}
        {...inputProps}
        className={cn(
          'flex h-10 w-full rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
          error && 'border-red-500 focus:ring-red-500',
          className,
        )}
      />
    </FormField>
  );
};
