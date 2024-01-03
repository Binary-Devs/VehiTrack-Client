"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import { useGetAllDriverQuery } from "@/redux/api/driver/driverApi";
import { Button, Col, Row } from "antd";

const CreateAccidentHistory = () => {
  const query: Record<string, any> = {};
  const { data: driver, isLoading, error } = useGetAllDriverQuery({});
  console.log(driver);
  query["limit"] = 99999;
  query["sortBy"] = "fullName";
  query["sortOrder"] = "asc";

  const vehicles = [
    {
      id: 1,
      vehicleId: "VEH1001",
      regNo: "ABC123",
      brandId: 1,
      modelId: 1,
      vehicleValue: 25000.0,
      driverId: 1,
      helperId: 2,
      isActive: true,
      createdAt: "2023-01-01",
      updatedAt: "2023-01-01",
    },
    {
      id: 2,
      vehicleId: "VEH1002",
      regNo: "XYZ456",
      brandId: 2,
      modelId: 2,
      vehicleValue: 30000.0,
      driverId: 2,
      helperId: 3,
      isActive: true,
      createdAt: "2023-01-02",
      updatedAt: "2023-01-02",
    },
    {
      id: 3,
      vehicleId: "VEH1003",
      regNo: "LMN789",
      brandId: 3,
      modelId: 3,
      vehicleValue: 20000.0,
      driverId: 3,
      helperId: 4,
      isActive: true,
      createdAt: "2023-01-03",
      updatedAt: "2023-01-03",
    },
    {
      id: 4,
      vehicleId: "VEH1004",
      regNo: "PQR321",
      brandId: 1,
      modelId: 2,
      vehicleValue: 28000.0,
      driverId: 4,
      helperId: 5,
      isActive: false,
      createdAt: "2023-01-04",
      updatedAt: "2023-01-04",
    },
    {
      id: 5,
      vehicleId: "VEH1005",
      regNo: "JKL987",
      brandId: 2,
      modelId: 1,
      vehicleValue: 32000.0,
      driverId: 5,
      helperId: 1,
      isActive: true,
      createdAt: "2023-01-05",
      updatedAt: "2023-01-05",
    },
  ];
  const drivers = [
    {
      id: 1,
      fullName: "John Doe",
      mobile: "123-456-7890",
      address: "123 Main Street, Cityville",
      userId: 101,
      isActive: true,
      createdAt: "2023-01-01",
      updatedAt: "2023-01-01",
    },
    {
      id: 2,
      fullName: "Alice Johnson",
      mobile: "987-654-3210",
      address: "456 Elm Avenue, Townsville",
      userId: 102,
      isActive: true,
      createdAt: "2023-01-02",
      updatedAt: "2023-01-02",
    },
    {
      id: 3,
      fullName: "Bob Smith",
      mobile: "555-123-4567",
      address: "789 Oak Lane, Villagetown",
      userId: 103,
      isActive: true,
      createdAt: "2023-01-03",
      updatedAt: "2023-01-03",
    },
    {
      id: 4,
      fullName: "Eva Martinez",
      mobile: "777-888-9999",
      address: "101 Pine Street, Hamletville",
      userId: 104,
      isActive: false,
      createdAt: "2023-01-04",
      updatedAt: "2023-01-04",
    },
    {
      id: 5,
      fullName: "Mike Williams",
      mobile: "222-333-4444",
      address: "222 Maple Avenue, Countryside",
      userId: 105,
      isActive: true,
      createdAt: "2023-01-05",
      updatedAt: "2023-01-05",
    },
  ];
  if (error) {
    console.log(error);
  }
  const vehicleOptions = vehicles?.map((vehicle) => {
    return {
      label: vehicle?.regNo,
      value: vehicle?.id,
    };
  });
  const driverOptions = drivers?.map((driver) => {
    return {
      label: driver?.fullName,
      value: driver?.id,
    };
  });
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Create Pump Station</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8}>
            <div>
              <FormSelectField
                size="large"
                name="vehicleId "
                options={vehicleOptions as any}
                label="Vehicle"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col span={8}>
            <div>
              <FormSelectField
                size="large"
                name="driverId "
                options={driverOptions as any}
                label="Driver"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col
            className="gutter-row"
            xs={24}
            md={12}
            lg={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormDatePicker
              name="date"
              label="Date"
              size="large"
              disablePrevious={false}
            />
          </Col>
          <Col span={8}>
            <FormInput name="location" label="Location" />
          </Col>
          <Col span={8}>
            <FormInput name="odometer" label="Odometer" />
          </Col>
          <Col span={8}>
            <FormInput name="paymentStatus" label="Payment Status" />
          </Col>
          <Col span={8}>
            <FormInput name="amount" label="Amount" />
          </Col>
          <Col span={8}>
            <FormTextArea name="details" label="Details" />
          </Col>
        </Row>
        <Button style={{ margin: "10px 0px" }} type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateAccidentHistory;

