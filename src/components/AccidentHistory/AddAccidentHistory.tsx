'use client';
import Form from '@/components/Forms/Form';
import FormDatePicker from '@/components/Forms/FormDatePicker';
import FormInput from '@/components/Forms/FormInput';
import FormSelectField from '@/components/Forms/FormSelectField';
import FormTextArea from '@/components/Forms/FormTextArea';
import { accidentPaymentStatus } from '@/constants/global';
import { useCreateAccidentHistoryMutation } from '@/redux/api/accidentHistory/accidentHistoryApi';
import { useGetAllDriverQuery } from '@/redux/api/driver/driverApi';
import { useGetAllVehicleQuery } from '@/redux/api/vehicle/vehicleApi';
import { Button, Col, Modal, Row, message } from 'antd';
import dayjs from 'dayjs';

interface IProps {
  open: boolean;
  handleClose: any;
}

const AddAccidentHistory = ({ open, handleClose }: IProps) => {
  // library
  const { data: vehiclesData } = useGetAllVehicleQuery({ limit: 100 });
  const allVehicles = vehiclesData?.vehicles || [];

  const { data: driversData } = useGetAllDriverQuery({ limit: 100 });
  const allDrivers = driversData?.drivers || [];
  // end library

  const [createAccidentHistory, { isLoading }] =
    useCreateAccidentHistoryMutation();

  const onSubmit = async (data: any) => {
    message.loading('Creating.............');
    try {
      data.odoMeter = parseInt(data.odoMeter);
      data.amount = parseInt(data.amount);
      const res = await createAccidentHistory({ ...data }).unwrap();
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
      title="Create Accident History"
      open={open}
      onCancel={handleClose}
      width={700}
      footer={null}
    >
      <div
        style={{
          paddingTop: 10,
        }}
      >
        <Form submitHandler={onSubmit} defaultValues={{ date: dayjs() }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12} lg={8}>
              <FormDatePicker
                name="date"
                label="Date"
                size="large"
                disablePrevious={false}
              />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <div>
                <FormSelectField
                  size="large"
                  name="vehicleId"
                  options={allVehicles?.map((el) => ({
                    label: el.regNo,
                    value: el.id,
                  }))}
                  label="Select Vehicle"
                  placeholder="Select"
                  required={true}
                />
              </div>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <div>
                <FormSelectField
                  size="large"
                  name="driverId"
                  options={allDrivers?.map((el) => ({
                    label: el.fullName,
                    value: el.id,
                  }))}
                  label="Select Driver"
                  placeholder="Select"
                  required={true}
                />
              </div>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput
                name="odoMeter"
                label="Odometer"
                type="number"
                size="large"
                required={true}
              />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormSelectField
                size="large"
                name="paymentStatus"
                options={accidentPaymentStatus}
                label="Payment Status"
                placeholder="Select"
                required={true}
              />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <FormInput
                name="amount"
                label="Amount"
                type="number"
                size="large"
                required={true}
              />
            </Col>

            <Col xs={24}>
              <FormInput
                name="location"
                label="Location"
                type="text"
                size="large"
                required={true}
              />
            </Col>

            <Col xs={24}>
              <FormTextArea name="details" label="Details" required />
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

export default AddAccidentHistory;
