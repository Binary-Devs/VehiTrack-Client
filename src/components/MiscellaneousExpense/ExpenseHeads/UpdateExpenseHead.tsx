'use client';

import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { useUpdateExpenseHeadMutation } from '@/redux/api/expenseHead/expenseHeadApi';
import { Button, Col, Modal, Row, message } from 'antd';

interface IProps {
  open: boolean;
  handleClose: any;
  preData: any;
}

const UpdateExpenseHead = ({ open, handleClose, preData }: IProps) => {
  const [updateExpenseHead, { isLoading }] = useUpdateExpenseHeadMutation();

  const onSubmit = async (data: any) => {
    message.loading('Updating.............');
    try {
      const res = await updateExpenseHead({
        id: preData?.id,
        data: { label: data.label },
      }).unwrap();
      if (res.id) {
        message.success('Successfully Updated');
        handleClose();
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <Modal
      title="Edit Expense Head"
      centered
      open={open}
      onCancel={handleClose}
      width={400}
      footer={null}
    >
      <div
        style={{
          paddingTop: 10,
        }}
      >
        <Form submitHandler={onSubmit} defaultValues={preData}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <FormInput
                name="label"
                label="Expense Head"
                type="text"
                size="large"
                required={true}
              />
            </Col>
            <Col xs={24}>
              <Button
                htmlType="submit"
                type="primary"
                style={{ width: '100%' }}
                disabled={isLoading}
              >
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default UpdateExpenseHead;
