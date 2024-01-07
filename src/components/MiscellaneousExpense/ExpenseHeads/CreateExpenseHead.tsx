'use client';

import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { useCreateExpenseHeadMutation } from '@/redux/api/expenseHead/expenseHeadApi';
import { Button, Col, Modal, Row, message } from 'antd';

interface IProps {
  open: boolean;
  handleClose: any;
}

const CreateExpenseHead = ({ open, handleClose }: IProps) => {
  const [createExpenseHead, { isLoading }] = useCreateExpenseHeadMutation();

  const onSubmit = async (data: any) => {
    message.loading('creating.............');
    try {
      const res = await createExpenseHead({ ...data }).unwrap();
      if (res.id) {
        message.success('Successfully Added');
        handleClose();
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <Modal
      title="Create Expense Head"
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
        <Form submitHandler={onSubmit}>
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
                Create
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default CreateExpenseHead;
