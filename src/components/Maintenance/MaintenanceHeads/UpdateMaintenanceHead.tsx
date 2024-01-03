'use client';

import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { useUpdateMaintenanceHeadMutation } from '@/redux/api/maintenanceHead/maintenanceHeadApi';
import { Button, Col, Modal, Row, message } from 'antd';

interface IProps {
  open: boolean;
  handleClose: any;
  preData: any;
}

const UpdateMaintenanceHead = ({ open, handleClose, preData }: IProps) => {
  const [updateMaintenanceHead, { isLoading }] =
    useUpdateMaintenanceHeadMutation();

  const onSubmit = async (data: any) => {
    message.loading('Updating.............');
    try {
      const res = await updateMaintenanceHead({
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
      title="Edit Maintenance Head"
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
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default UpdateMaintenanceHead;
