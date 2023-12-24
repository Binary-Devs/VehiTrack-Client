import { DatePicker } from "antd";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { Controller, useFormContext } from "react-hook-form";

const { RangePicker } = DatePicker;

type MyDatePickerProps = {
  onChange?: (
    valOne: DatePickerProps["value"] | RangePickerProps["value"],
    valTwo: [string, string] | string
  ) => void;
  name: string;
  value?: DatePickerProps["value"];
  size?: "large" | "small";
  placeholder: [string, string];
};

const FormDateRangePicker = ({
  name,
  onChange,
  placeholder,
  size = "large",
}: MyDatePickerProps) => {
  const { control, setValue } = useFormContext();

  const handleOnChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    onChange ? onChange(value, dateString) : null;
    setValue(name, dateString);
  };

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RangePicker
            size={size}
            onChange={handleOnChange}
            style={{ width: "100%" }}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};

export default FormDateRangePicker;
