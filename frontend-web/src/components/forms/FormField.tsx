"use client";

import React from "react";
import { FieldError } from "react-hook-form";

interface FormFieldProps {
  label?: string;
  error?: FieldError | string;
  children: React.ReactNode;
  hint?: string;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  children,
  hint,
  className = "flex flex-col space-y-1.5",
}) => {
  const errorMessage = typeof error === "string" ? error : error?.message;

  return (
    <div className={className}>
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}
      {children}
      {hint && !errorMessage && <p className="text-xs text-muted-foreground">{hint}</p>}
      {errorMessage && <p className="text-xs text-red-500 font-medium">{errorMessage}</p>}
    </div>
  );
};
