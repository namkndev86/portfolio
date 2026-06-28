'use client';

import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import { FormField } from './FormField';
import { cn } from '@/lib/utils';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  registration?: Partial<UseFormRegisterReturn>;
  error?: FieldError | string;
  hint?: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  registration,
  error,
  hint,
  className,
  rows = 4,
  ...textareaProps
}) => {
  return (
    <FormField label={label} error={error} hint={hint}>
      <textarea
        {...registration}
        {...textareaProps}
        rows={rows}
        className={cn(
          'flex w-full rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-y',
          error && 'border-red-500 focus:ring-red-500',
          className,
        )}
      />
    </FormField>
  );
};
