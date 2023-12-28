import { Button, Col, Row } from "antd";
import Form from "../Forms/Form";
import FormDatePicker from "../Forms/FormDatePicker";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";

const AddEquipmentIn = () => {
  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">Add Equipment</h1>
      <div>
        <Form submitHandler={(data) => console.log(data)}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormDatePicker name="date" size="large" label="Date" />
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
                <FormSelectField
                  name="name"
                  size="large"
                  label="Equipment"
                  required={true}
                  options={[]}
                />
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
                <FormInput
                  type="number"
                  name="quantity"
                  size="large"
                  label="Quantity"
                  required={true}
                />
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
                <FormInput
                  type="number"
                  name="unitPrice"
                  size="large"
                  label="Unit price"
                  required={true}
                />
              </Col>
              <Col
                className="gutter-row"
                xs={24}
                md={16}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="remarks"
                  size="large"
                  label="Remarks"
                />
              </Col>
            </Row>
          </div>

          <div className="flex justify-center items-center">
            <Button htmlType="submit" type="primary">
              Add Equipment In
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddEquipmentIn;
