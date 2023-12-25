import { Button, Col, Row } from "antd";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";

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
                <FormInput
                  type="text"
                  name="name"
                  size="large"
                  label="Fast name"
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
                  type="text"
                  name="name"
                  size="large"
                  label="Last Name"
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
                  type="text"
                  name="phoneNumber"
                  size="large"
                  label="Phone Number"
                  required={true}
                />
              </Col>
            </Row>
          </div>

          <div className="flex justify-center items-center">
            <Button htmlType="submit" type="primary">
              Add
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddEquipmentIn;
