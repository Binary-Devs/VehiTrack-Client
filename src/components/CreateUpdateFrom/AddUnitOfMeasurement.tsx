import { Button, Col, Row } from "antd";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";

const AddUnitOfMeasurement = () => {
  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">Add Unit</h1>
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
            <Row>
              <Col
                className="gutter-row"
                xs={24}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="label"
                  size="large"
                  label="Label"
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

export default AddUnitOfMeasurement;
