"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { useCreateModelMutation } from "@/redux/api/model/modelApi";
import { Button, Col, Row, message } from "antd";

const AddUpdateModel = ({ brands }: { brands: any }) => {
  const [createModel, { isLoading }] = useCreateModelMutation();
  const onSubmit = async (values: any) => {
    message.loading("Adding....");
    try {
      const res = await createModel({ ...values }).unwrap();
      if (res.id) {
        message.success("Model added successfully!");
      } else {
        message.error(res.message);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  //   if(isLoading){
  //     return message.loading("Loading...")
  //   }

  // const driverlist = [
  //   {
  //     label: "Md korim (D-25141)",
  //     value: "dffd",
  //   },
  //   {
  //     label: "Md hasan (D-25414)",
  //     value: "ddfsdf",
  //   },
  //   {
  //     label: "Md Mondi (D-74118)",
  //     value: "ddsdf",
  //   },
  //   {
  //     label: "Mukbos (D-17411)",
  //     value: "dsfd",
  //   },
  // ];
  // const helperList = [
  //   {
  //     label: "Aomie (H-2511)",
  //     value: "ddafds",
  //   },
  //   {
  //     label: "Sampod (H-5414)",
  //     value: "ddsadf",
  //   },
  //   {
  //     label: "Md timil (H-85118)",
  //     value: "ddafd",
  //   },
  //   {
  //     label: "alind (H-1411)",
  //     value: "ddasdf",
  //   },
  // ];

  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">Add Model</h1>
      {/*  */}
      <div>
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "20px",
              marginBottom: "10px",
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="brandId"
                  options={brands.map((m: any) => ({
                    label: m.label,
                    value: m.id,
                  }))}
                  // defaultValue={priceTypeOptions[0]}
                  label="Brand Name"
                  // placeholder="Select"
                  required={true}
                />
              </Col>
              <Col
                className="gutter-row"
                xs={24}
                md={12}
                lg={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="label"
                  size="large"
                  label="Model name"
                  required={true}
                  placeholder="Please enter model name"
                />
              </Col>
            </Row>
            <div className="flex justify-end items-center mt-[5px]">
              <Button htmlType="submit" type="primary" disabled={isLoading}>
                Add
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddUpdateModel;
