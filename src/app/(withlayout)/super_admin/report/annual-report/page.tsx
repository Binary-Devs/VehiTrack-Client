"use client";
import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormYearPicker from "@/components/Forms/FormYearPicker";
import ActionBar from "@/components/ui/ActionBar";

const AnnualReportPage = () => {
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
      <ActionBar title="Annual Report" />
      <Form submitHandler={onSubmit}>
        <div className="flex justify-between mb-10">
          <div className="w-96">
            <FormSelectField
              name="vehicle-name"
              options={options}
              placeholder="Select vehicle"
            />
          </div>
          <div className="w-96">
            <FormYearPicker picker="year" name="year" />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AnnualReportPage;
