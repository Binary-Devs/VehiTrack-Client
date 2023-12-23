"use client";

import Form from "@/components/Forms/Form";
import FormDateRangePicker from "@/components/Forms/FormDateRangePicker";
import FormSelectField from "@/components/Forms/FormSelectField";
import ActionBar from "@/components/ui/ActionBar";
import UMTable from "@/components/ui/Table";

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

  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
      render: (data: string, rec: any, index: number) => index,
    },
    {
      title: "Vehicle",
      dataIndex: "vehicle",
      key: "vehicle",
    },
    {
      title: "Total Trip",
      dataIndex: "total-trip",
      key: "total-trip",
    },
    {
      title: "Trip Income",
      dataIndex: "trip-income",
      key: "total-income",
    },
    {
      title: "Trip Expenses",
      dataIndex: "trip-expenses",
      key: "trip-expenses",
    },
    {
      title: "Maintenance Expenses",
      dataIndex: "maintenance-expenses",
      key: "maintenance-expenses",
    },
    {
      title: "Miscellaneous Expenses",
      dataIndex: "miscellaneous-expenses",
      key: "miscellaneous-expenses",
    },
    {
      title: "Documentation Cost",
      dataIndex: "documentation-cost",
      key: "documentation-cost",
    },
    {
      title: "Total Expenses",
      dataIndex: "total-expenses",
      key: "total-expenses",
    },
  ];

  const onChange = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <ActionBar title="Summary" />
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
            <FormDateRangePicker
              name="start-date"
              onChange={onChange}
              placeholder={["Start Date", "End Date"]}
            />
          </div>
        </div>
      </Form>
      <UMTable columns={columns} dataSource={[]} />
    </div>
  );
};

export default SummaryPage;
