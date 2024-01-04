"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {
  useCreatePartyMutation,
  useGetSinglePartyQuery,
  useUpdatePartyMutation,
} from "@/redux/api/party/partyApi";
import { Button, Col, Row, message } from "antd";
import Loader from "../Utlis/Loader";

const AddUpdateParty = ({ id }: { id?: string }) => {
  //Get
  const { data, isLoading: getLoad } = useGetSinglePartyQuery(id ? id : "");

  //Update
  const [updateParty, { isLoading: updateLoad }] = useUpdatePartyMutation();

  //Create
  const [createParty, { isLoading: createLoad }] = useCreatePartyMutation();

  const onSubmit = async (values: any) => {
    console.log(values);

    message.loading(id ? "Updating...." : "Adding....");
    try {
      const res = id
        ? await updateParty({
            id,
            data: {
              fullName: values.fullName,
              mobile: values.mobile,
              address: values.address,
            },
          }).unwrap()
        : await createParty(values).unwrap();
      if (res.id) {
        message.success(`Party ${id ? "updated" : "added"} successfully!`);
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
        {id ? "Update Party" : "Add Party"}
      </h1>
      <div>
        <Form submitHandler={onSubmit} defaultValues={id ? data : {}}>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col xs={24} md={12} lg={8} style={{ margin: "10px 0" }}>
              <FormInput name="fullName" label="Full Name" />
            </Col>
            <Col xs={24} md={12} lg={8} style={{ margin: "10px 0" }}>
              <FormInput name="mobile" label="Mobile" />
            </Col>
            <Col xs={24} md={12} lg={8} style={{ margin: "10px 0" }}>
              <FormInput name="address" label="Address" />
            </Col>
          </Row>
          <Button
            htmlType="submit"
            type="primary"
            disabled={createLoad || updateLoad}
          >
            {id ? "Update" : "Add"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddUpdateParty;
