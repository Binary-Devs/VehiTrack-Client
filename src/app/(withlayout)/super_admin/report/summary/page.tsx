"use client";

import Form from "@/components/Forms/Form";
import FormDateRangePicker from "@/components/Forms/FormDateRangePicker";
import FormSelectField from "@/components/Forms/FormSelectField";

const SummaryPage = () => {
  const onSubmit = async (values: any) => {
    console.log(values);
  };

  const options = [
    {
      label: "Toyota",
      value: "Toyota",
    },
    {
      label: "BMW",
      value: "BMW",
    },
  ];

  const onChange = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <Form submitHandler={onSubmit}>
        <div className="flex justify-between">
          <div className="w-96">
            <FormSelectField
              name="vehicle-name"
              options={options}
              placeholder="Select vehicle"
            />
          </div>
          <div className="w-96">
            <FormDateRangePicker
              name="start-date"
              onChange={onChange}
              placeholder={["Start Date", "End Date"]}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SummaryPage;
