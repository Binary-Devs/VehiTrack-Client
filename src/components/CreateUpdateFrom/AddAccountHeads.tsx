"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import {
  useCreateAccountHeadMutation,
  useGetSingleAccountHeadQuery,
  useUpdateAccountHeadMutation,
} from "@/redux/api/accountHead/accountHeadApi";
import { useGetAllAccountTypeQuery } from "@/redux/api/accountType/accountTypeApi";
import { Button, Col, Row, message } from "antd";
import Loader from "../Utlis/Loader";

const AddAccountHeads = ({ id }: { id?: string }) => {
  //Get
  const { data, isLoading: getLoad } = useGetSingleAccountHeadQuery(
    id ? id : ""
  );

  //Update
  const [updateAccountHead, { isLoading: updateLoad }] =
    useUpdateAccountHeadMutation();

  //Create
  const [createAccountHead, { isLoading: createLoad }] =
    useCreateAccountHeadMutation();
  const { data: accountType } = useGetAllAccountTypeQuery({
    limit: 100,
  });

  const accountTypes = accountType?.accountTypes;

  const accountTypeOptions = accountTypes?.map((accountType) => {
    return {
      label: accountType?.label,
      value: accountType?.id,
    };
  });
  const onSubmit = async (values: any) => {
    message.loading(id ? "Updating...." : "Adding....");
    try {
      const res = id
        ? await updateAccountHead({
            id,
            data: {
              label: values.label,
              accountTypeId: values.accountTypeId,
            },
          }).unwrap()
        : await createAccountHead({ ...values }).unwrap();
      if (res.id) {
        message.success(
          `Account Head ${id ? "updated" : "added"} successfully!`
        );
      } else {
        message.error(res.message);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  if (id && getLoad) {
    return <Loader className="h-[40vh] flex items-center justify-center" />;
  }

  return (
    <div>
      <h1 className="text-center my-1 font-bold text-2xl">
        {id ? "Update Account Head" : "Add Account Head"}
      </h1>
      {/*  */}
      <Form submitHandler={onSubmit} defaultValues={data}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
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
          <div className="flex justify-end items-center">
            <Button
              htmlType="submit"
              type="primary"
              disabled={createLoad || updateLoad}
            >
              {id ? "Update" : "Add"}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddAccountHeads;
