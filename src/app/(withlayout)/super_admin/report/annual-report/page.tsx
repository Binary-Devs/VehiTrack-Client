"use client";
import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormYearPicker from "@/components/Forms/FormYearPicker";
import ActionBar from "@/components/ui/ActionBar";
import UMTable from "@/components/ui/Table";

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
  const columns = [
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "Earning",
      dataIndex: "earning",
      key: "earning",
    },
    {
      title: "Expense",
      dataIndex: "expense",
      key: "expense",
    },
    {
      title: "Maintain",
      dataIndex: "maintain",
      key: "maintain",
    },
    {
      title: "Profit",
      dataIndex: "profit",
      key: "profit",
    },
    {
      title: "Profit in %",
      dataIndex: "profit-in-percent",
      key: "profit-in-percent",
    },
  ];

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
      <UMTable columns={columns} dataSource={[]} />
    </div>
  );
};

export default AnnualReportPage;
