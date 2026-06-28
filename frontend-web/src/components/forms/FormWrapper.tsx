"use client";

import React from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

interface FormWrapperProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  onSubmit: (data: TFieldValues) => void | Promise<void>;
  children: React.ReactNode;
  className?: string;
}

export function FormWrapper<TFieldValues extends FieldValues>({
  form,
  onSubmit,
  children,
  className = "space-y-4",
}: FormWrapperProps<TFieldValues>) {
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={className} noValidate>
      {children}
    </form>
  );
}
