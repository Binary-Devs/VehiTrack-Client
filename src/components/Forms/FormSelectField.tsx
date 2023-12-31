"use client";

import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string | boolean;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
  handleChange?: (el: string) => void;
  required?: boolean;
};

const FormSelectField = ({
  name,
  size = "large",
  value,
  placeholder = "select",
  options,
  label,
  defaultValue,
  handleChange,
  required,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      {required && (
        <span
          style={{
            color: "red",
          }}
        >
          *
        </span>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={handleChange ? handleChange : onChange}
            size={size}
            options={options}
            value={value}
            style={{ width: "100%" }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
