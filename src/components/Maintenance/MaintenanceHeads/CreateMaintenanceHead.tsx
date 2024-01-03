'use client';

import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { useCreateMaintenanceHeadMutation } from '@/redux/api/maintenanceHead/maintenanceHeadApi';
import { Button, Col, Modal, Row, message } from 'antd';

interface IProps {
  open: boolean;
  handleClose: any;
}

const CreateMaintenanceHead = ({ open, handleClose }: IProps) => {
  const [createMaintenanceHead, { isLoading }] =
    useCreateMaintenanceHeadMutation();

  const onSubmit = async (data: any) => {
    message.loading('creating.............');
    try {
      const res = await createMaintenanceHead({ ...data }).unwrap();
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
      title="Create Maintenance Head"
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
                label="Maintenance Head"
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

export default CreateMaintenanceHead;
