import { DatePicker, DatePickerProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

type UMDatePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
  disablePrevious?: boolean;
  specificDates?: string[];
  required?: boolean;
};

const FormDatePicker = ({
  name,
  label,
  onChange,
  size = "large",
  disablePrevious = true,
  specificDates,
  required = false,
}: UMDatePikerProps) => {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, date);
  };

  const disabledDate = (current: any) => {
    // Convert the specific dates to JavaScript Date objects
    // const specificDatesConvert = [new Date('2023-10-20'), new Date('2014-05-05')];
    const specificDatesConvert = specificDates?.map((date) => new Date(date));
    // Get the current date without time
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if the current date is before today or in the specific dates array
    return (
      current &&
      (current < today ||
        specificDatesConvert?.some((date) => current.isSame(date, "day")))
    );
  };

  return (
    <div className="">
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
        name={name}
        control={control}
        render={({ field }) => {
          let defaultValue = field.value ? dayjs(field.value) : undefined;

          return disablePrevious ? (
            <DatePicker
              defaultValue={defaultValue}
              disabledDate={disabledDate}
              size={size}
              onChange={handleOnChange}
              style={{ width: "100%" }}
            />
          ) : (
            <DatePicker
              value={defaultValue}
              format="DD-MM-YYYY"
              size={size}
              onChange={handleOnChange}
              style={{ width: "100%" }}
            />
          );
        }}
      />
    </div>
  );
};

export default FormDatePicker;
