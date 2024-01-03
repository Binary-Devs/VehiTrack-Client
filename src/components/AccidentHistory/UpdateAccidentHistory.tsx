'use client';
import Form from '@/components/Forms/Form';
import FormDatePicker from '@/components/Forms/FormDatePicker';
import FormInput from '@/components/Forms/FormInput';
import FormSelectField from '@/components/Forms/FormSelectField';
import FormTextArea from '@/components/Forms/FormTextArea';
import { accidentPaymentStatus } from '@/constants/global';
import { useUpdateAccidentHistoryMutation } from '@/redux/api/accidentHistory/accidentHistoryApi';
import { useGetAllDriverQuery } from '@/redux/api/driver/driverApi';
import { useGetAllVehicleQuery } from '@/redux/api/vehicle/vehicleApi';
import { Button, Col, Modal, Row, message } from 'antd';

interface IProps {
  open: boolean;
  handleClose: any;
  preData: any;
}

const UpdateAccidentHistory = ({ open, handleClose, preData }: IProps) => {
  // library
  const { data: vehiclesData } = useGetAllVehicleQuery({ limit: 100 });
  const allVehicles = vehiclesData?.vehicles || [];

  const { data: driversData } = useGetAllDriverQuery({ limit: 100 });
  const allDrivers = driversData?.drivers || [];
  // end library

  const [updateAccidentHistory, { isLoading }] =
    useUpdateAccidentHistoryMutation();

  const onSubmit = async (data: any) => {
    message.loading('Updating.............');
    const newData = {
      date: data?.date,
      vehicleId: data?.vehicleId,
      driverId: data?.driverId,
      details: data?.details,
      location: data?.location,
      odoMeter: parseInt(data?.odoMeter),
      paymentStatus: data?.paymentStatus,
      amount: parseInt(data?.amount),
    };
    try {
      const res = await updateAccidentHistory({
        id: preData?.id,
        data: newData,
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
      title="Edit Accident History"
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
        <Form submitHandler={onSubmit} defaultValues={preData}>
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
            </Col>
            <Col xs={24} md={12} lg={8}>
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
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default UpdateAccidentHistory;
