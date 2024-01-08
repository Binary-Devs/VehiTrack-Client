"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {
  useCreateBrandMutation,
  useUpdateBrandMutation,
} from "@/redux/api/brand/brandApi";
import { Button, Col, Row, message } from "antd";

const AddUpdateBrand = ({ updateData }: { updateData?: any }) => {

  //Update
  const [updateBrand, { isLoading: updateLoad }] = useUpdateBrandMutation();

  //Create
  const [createBrand, { isLoading: createLoad }] = useCreateBrandMutation();

  const onSubmit = async (values: any) => {
    message.loading(updateData ? "Updating...." : "Adding....");
    try {
      const res = updateData
        ? await updateBrand({ updateData, data: values }).unwrap()
        : await createBrand({ ...values }).unwrap();
        console.log(res)
      if (res.id) {
        message.success(
          `Brand ${updateData ? "updated" : "added"} successfully!`
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
        {updateData ? "Update Brand" : "Add Brand"}
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
                  marginBottom: "15px",
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
            <div className="flex items-center">
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

export default AddUpdateBrand;
