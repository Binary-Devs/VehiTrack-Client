"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { useCreateAccountHeadMutation } from "@/redux/api/accountHead/accountHeadApi";
import { useGetAllAccountTypeQuery } from "@/redux/api/accountType/accountTypeApi";
import { Button, Col, Row, message } from "antd";

const AddAccountHeads = () => {
  const [createAccountHead, { isLoading }] = useCreateAccountHeadMutation();
  const { data } = useGetAllAccountTypeQuery({
    limit: 100,
  });

  const accountTypes = data?.accountTypes;

  const accountTypeOptions = accountTypes?.map((accountType) => {
    return {
      label: accountType?.label,
      value: accountType?.id,
    };
  });
  const onSubmit = async (data: any) => {
    message.loading("Adding.............");
    try {
      const res = await createAccountHead({ ...data }).unwrap();
      if (res.id) {
        message.success(" create account head in successfully");
      } else {
        message.error(res.message);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">Add Account Head</h1>
      <Form submitHandler={onSubmit}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p className="text-base lg:text-lg font-normal">
            Account Head Information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col
              className="gutter-row"
              xs={24}
              md={24}
              lg={24}
              style={{ margin: "10px 0" }}
            >
              <div style={{ margin: "10px 0px" }}>
                <FormInput
                  name="label"
                  label="Label"
                  type="text"
                  size="large"
                  required={true}
                  placeholder="Please enter account head name"
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              xs={24}
              md={24}
              lg={24}
              style={{ margin: "10px 0" }}
            >
              <div style={{ margin: "10px 0px" }}>
                <FormSelectField
                  size="large"
                  name="accountTypeId"
                  options={accountTypeOptions as any}
                  label="Account Type"
                  required={true}
                  placeholder="Select"
                />
              </div>
            </Col>
          </Row>
        </div>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default AddAccountHeads;
