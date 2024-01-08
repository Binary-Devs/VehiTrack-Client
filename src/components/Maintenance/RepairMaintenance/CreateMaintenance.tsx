'use client';
import Form from '@/components/Forms/Form';
import FormDatePicker from '@/components/Forms/FormDatePicker';
import FormInput from '@/components/Forms/FormInput';
import FormSelectField from '@/components/Forms/FormSelectField';
import MainCard from '@/components/ui/MainCard';
import { maintenanceType, workshopType } from '@/constants/global';
import { useGetAllDriverQuery } from '@/redux/api/driver/driverApi';
import { useCreateMaintenanceMutation } from '@/redux/api/maintenance/maintenanceApi';
import { useGetAllMaintenanceHeadQuery } from '@/redux/api/maintenanceHead/maintenanceHeadApi';
import { useGetAllVehicleQuery } from '@/redux/api/vehicle/vehicleApi';
import { maintenanceSchema } from '@/schemas/maintenanceSchema';
import { getUserInfo } from '@/services/auth.service';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Row, message } from 'antd';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import SelectEquipment from './SelectEquipment';

const CreateMaintenance = () => {
  const router = useRouter();
  const { role } = getUserInfo() as any;
  // library
  const { data: vehiclesData } = useGetAllVehicleQuery({ limit: 100 });
  const allVehicles = vehiclesData?.vehicles || [];

  const { data: driversData } = useGetAllDriverQuery({ limit: 100 });
  const allDrivers = driversData?.drivers || [];

  const { data: maintenanceHeadData } = useGetAllMaintenanceHeadQuery({
    limit: 100,
  });
  const allMaintenanceHeads = maintenanceHeadData?.maintenanceHeads || [];
  // end library

  const [createMaintenance, { isLoading }] = useCreateMaintenanceMutation();

  const onSubmit = async (data: any) => {
    message.loading('Creating.............');
    const newData = {
      date: data?.date,
      vehicleId: data?.vehicleId,
      driverId: data?.driverId,
      odoMeter: parseInt(data?.odoMeter),
      workshopType: data?.workshopType,
      maintenanceType: data?.maintenanceType,
      workshopDetails: data?.workshopDetails || '',
      serviceCharge: parseInt(data?.serviceCharge || 0),
      remarks: data?.remarks || '',
      maintenanceHeadId: data?.maintenanceHeadId,
      equipmentUses: data?.equipmentUses?.map((el: any) => ({
        date: data?.date,
        vehicleId: data?.vehicleId,
        equipmentId: el?.equipmentId,
        quantity: parseInt(el.quantity || 1),
        unitPrice:
          parseInt(el.totalPrice || 0) / parseInt(el.quantity || 1) || 0,
        totalPrice: parseInt(el.totalPrice || 0),
        remarks: el.remarks || '',
        inHouse: data?.workshopType === 'InHouse' ? true : false,
      })),
    };
    try {
      const res = await createMaintenance({ ...newData }).unwrap();
      if (res.id) {
        message.success('Successfully Added');
        router.push(`/${role}/maintenance/repair_maintenance`);
      }
    } catch (err: any) {
      message.error(err.message);
      console.log(err);
    }
  };

  return (
    <MainCard
      title="New Maintenance"
      extra={
        <Button
          type="primary"
          onClick={() => router.push(`/${role}/maintenance/repair_maintenance`)}
        >
          Back
        </Button>
      }
    >
      <Form
        submitHandler={onSubmit}
        defaultValues={{ date: dayjs() }}
        resolver={yupResolver(maintenanceSchema)}
      >
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8} lg={10} xl={8}>
            <Row gutter={[16, 16]}>
              <Col xs={24}>
                <FormDatePicker
                  name="date"
                  label="Date"
                  size="large"
                  disablePrevious={false}
                />
              </Col>
              <Col xs={24}>
                <FormSelectField
                  size="large"
                  name="vehicleId"
                  options={allVehicles?.map((el: any) => ({
                    label: el.regNo,
                    value: el.id,
                  }))}
                  label="Select Vehicle"
                  placeholder="Select"
                  required={true}
                />
              </Col>
              <Col xs={24}>
                <FormSelectField
                  size="large"
                  name="driverId"
                  options={allDrivers?.map((el: any) => ({
                    label: el.fullName,
                    value: el.id,
                  }))}
                  label="Select Driver"
                  placeholder="Select"
                />
              </Col>

              <Col xs={24} lg={12}>
                <FormSelectField
                  size="large"
                  name="workshopType"
                  options={workshopType || []}
                  label="Workshop Type"
                  placeholder="Select"
                  required={true}
                />
              </Col>

              <Col xs={24} lg={12}>
                <FormSelectField
                  size="large"
                  name="maintenanceType"
                  options={maintenanceType || []}
                  label="Maintenance Type"
                  placeholder="Select"
                  required={true}
                />
              </Col>
              <Col xs={24}>
                <FormSelectField
                  size="large"
                  name="maintenanceHeadId"
                  options={allMaintenanceHeads.map((el: any) => ({
                    label: el.label,
                    value: el.id,
                  }))}
                  label="Select Maintenance Head"
                  placeholder="Select"
                  required={true}
                />
              </Col>

              <Col xs={24} lg={12}>
                <FormInput
                  name="odoMeter"
                  label="Odo Meter"
                  type="number"
                  size="large"
                  required={true}
                />
              </Col>
              <Col xs={24} lg={12}>
                <FormInput
                  name="serviceCharge"
                  label="Service Charge"
                  type="number"
                  size="large"
                  required={true}
                />
              </Col>

              <Col xs={24}>
                <FormInput
                  name="workshopDetails"
                  label="Workshop Details"
                  type="text"
                  size="large"
                />
              </Col>

              <Col xs={24}>
                <FormInput
                  name="remarks"
                  label="Remarks"
                  type="text"
                  size="large"
                />
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={16} lg={14} xl={16}>
            <p style={{ fontWeight: 700, lineHeight: 1.5, paddingBottom: 16 }}>
              Equipment Uses
            </p>
            <SelectEquipment />
          </Col>
          <Col xs={24} md={8} lg={10} xl={8}>
            <Button
              htmlType="submit"
              type="primary"
              style={{ width: '100%' }}
              disabled={isLoading}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </MainCard>
  );
};

export default CreateMaintenance;
