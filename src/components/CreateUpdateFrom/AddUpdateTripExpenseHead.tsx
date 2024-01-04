"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {
  useGetSingleExpenseHeadQuery,
  useUpdateExpenseHeadMutation,
} from "@/redux/api/expenseHead/expenseHeadApi";
import { useCreateTripExpenseHeadMutation } from "@/redux/api/trip/tripApi";
import { Button, Col, Row, message } from "antd";
import Loader from "../Utlis/Loader";

const AddUpdateTripExpenseHead = ({ id }: { id?: string }) => {
  //Get
  const { data, isLoading: getLoad } = useGetSingleExpenseHeadQuery(
    id ? id : ""
  );

  //Update
  const [updateExpenseHead, { isLoading: updateLoad }] =
    useUpdateExpenseHeadMutation();

  //Create
  const [createTripExpenseHead, { isLoading: createLoad }] =
    useCreateTripExpenseHeadMutation();

  const onSubmit = async (values: any) => {
    message.loading(id ? "Updating...." : "Adding....");
    try {
      const res = id
        ? await updateExpenseHead({
            id,
            data: {
              label: values.label,
            },
          }).unwrap()
        : await createTripExpenseHead(values).unwrap();
      if (res.id) {
        message.success(
          `Trip Expense Head ${id ? "updated" : "added"} successfully!`
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
        {id ? "Update Trip Expense Head" : "Add Trip Expense Head"}
      </h1>
      <div>
        <Form submitHandler={onSubmit} defaultValues={id ? data : {}}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "10px",
            }}
            className="my-4"
          >
            <Row
              style={{
                display: "flex",
                alignItems: "center",
              }}
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            >
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
                  // value=""
                  label="Label"
                  required={true}
                  placeholder="Please enter label"
                />
              </Col>
            </Row>
            <div className="flex justify-end items-center mt-[5px]">
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
    </div>
  );
};

export default AddUpdateTripExpenseHead;
