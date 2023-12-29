"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useCreateBrandMutation } from "@/redux/api/brand/brandApi";
import { Button, Col, Row, message } from "antd";

const AddUpdateBrand = () => {
  const [createBrand, { isLoading }] = useCreateBrandMutation();
  const onSubmit = async (values: any) => {
    message.loading("Adding....");
    try {
      const res = await createBrand({ ...values }).unwrap();
      if (res.id) {
        message.success("Brand added successfully!");
      }else{
        message.error(res.message);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  //   if(isLoading){
  //     return message.loading("Loading...")
  //   }

  const driverlist = [
    {
      label: "Md korim (D-25141)",
      value: "dffd",
    },
    {
      label: "Md hasan (D-25414)",
      value: "ddfsdf",
    },
    {
      label: "Md Mondi (D-74118)",
      value: "ddsdf",
    },
    {
      label: "Mukbos (D-17411)",
      value: "dsfd",
    },
  ];
  const helperList = [
    {
      label: "Aomie (H-2511)",
      value: "ddafds",
    },
    {
      label: "Sampod (H-5414)",
      value: "ddsadf",
    },
    {
      label: "Md timil (H-85118)",
      value: "ddafd",
    },
    {
      label: "alind (H-1411)",
      value: "ddasdf",
    },
  ];

  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">Add Brand</h1>
      {/*  */}
      <div>
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
              Brand Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                xs={24}
                md={24}
                lg={24}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="label"
                  size="large"
                  label="Brand name"
                  required={true}
                  placeholder="Please enter brand name"
                />
              </Col>
            </Row>
          </div>
          <div className="flex justify-center items-center">
            <Button htmlType="submit" type="primary" disabled={isLoading}>
              Add
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddUpdateBrand;
