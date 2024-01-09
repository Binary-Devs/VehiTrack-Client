"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import {
  useCreateModelMutation,
  useUpdateModelMutation,
} from "@/redux/api/model/modelApi";
import { Button, Col, Row, message } from "antd";

const AddUpdateModel = ({
  updateData,
  brands,
}: {
  updateData?: any;
  brands?: any;
}) => {
  //Update
  const [updateModel, { isLoading: updateLoad }] = useUpdateModelMutation();

  //Create
  const [createModel, { isLoading: createLoad }] = useCreateModelMutation();

  const onSubmit = async (values: any) => {
    const data = {
      brandId: values.brandId,
      label: values.label,
    };

    message.loading(updateData ? "Updating...." : "Adding....");
    try {
      const res = updateData
        ? await updateModel({ id: updateData.id, data }).unwrap()
        : await createModel({ ...values }).unwrap();
      if (res.id) {
        message.success(
          `Model ${updateData ? "updated" : "added"} successfully!`
        );
      } else {
        message.error(res.message);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">
        {updateData ? "Update Model" : "Add Model"}
      </h1>
      {/*  */}
      <div>
        <Form
          submitHandler={onSubmit}
          defaultValues={updateData ? { ...updateData } : {}}
        >
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
                md={24}
                lg={24}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="brandId"
                  options={brands.map((b: any) => ({
                    label: b.label,
                    value: b.id,
                  }))}
                  label="Brand Name"
                  // placeholder="Select"
                  required={true}
                />
              </Col>
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
                  label="Model name"
                  required={true}
                  placeholder="Please enter model name"
                />
              </Col>
            </Row>
            <div className="flex justify-end items-center mt-[5px]">
              <Button
                htmlType="submit"
                type="primary"
                disabled={createLoad || updateLoad}
                style={{ width: "100%" }}
              >
                {updateData ? "Update" : "Add"}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddUpdateModel;
