import React from "react";
import TextField from "@mui/material/TextField";
import {
  Control,
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";

interface CustomTextFieldProps {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  control: Control<any>;
  placeholder?: string;
  defaultValue?: string;
  error?: boolean;
  messageError?: string;
  onChange?: (e: string) => void;
}

const InputCustom = ({
  name,
  label,
  type,
  required,
  control,
  placeholder,
  defaultValue,
  error,
  messageError,
  onChange,
}: CustomTextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          variant="outlined"
          fullWidth
          placeholder={placeholder}
          required={required}
          error={error}
          helperText={messageError}
          sx={{ mb: 2 }}
          onChange={(e) => {
            field.onChange(e);
            onChange?.(e.target.value);
          }}
        />
      )}
    />
  );
};

export default InputCustom;
