'use client';
import Form from '@/components/Forms/Form';
import FormDatePicker from '@/components/Forms/FormDatePicker';
import FormInput from '@/components/Forms/FormInput';
import FormSelectField from '@/components/Forms/FormSelectField';
import { useCreateExpenseMutation } from '@/redux/api/expense/expenseApi';
import { useGetAllExpenseHeadQuery } from '@/redux/api/expenseHead/expenseHeadApi';
import { useGetAllVehicleQuery } from '@/redux/api/vehicle/vehicleApi';
import { Button, Col, Modal, Row, message } from 'antd';
import dayjs from 'dayjs';

interface IProps {
  open: boolean;
  handleClose: any;
}

const CreateExpense = ({ open, handleClose }: IProps) => {
  // library
  const { data: vehiclesData } = useGetAllVehicleQuery({ limit: 100 });
  const allVehicles = vehiclesData?.vehicles || [];

  const { data: expenseHeadData } = useGetAllExpenseHeadQuery({
    limit: 100,
    isTripExpense: false,
    sortBy: 'label',
    sortOrder: 'asc',
  });
  const allExpenseHeads = expenseHeadData?.expenseHeads || [];
  // end library

  const [createExpense, { isLoading }] = useCreateExpenseMutation();

  const onSubmit = async (data: any) => {
    message.loading('Creating.............');
    const newData = {
      date: data?.date,
      vehicleId: data?.vehicleId,
      expenseHeadId: data?.expenseHeadId,
      amount: parseInt(data?.amount),
      remarks: data?.remarks || '',
    };
    try {
      const res = await createExpense({ ...newData }).unwrap();
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
      title="Create Expense"
      open={open}
      onCancel={handleClose}
      width={600}
      footer={null}
    >
      <div
        style={{
          paddingTop: 10,
        }}
      >
        <Form submitHandler={onSubmit} defaultValues={{ date: dayjs() }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <FormDatePicker
                name="date"
                label="Date"
                size="large"
                disablePrevious={false}
              />
            </Col>
            <Col xs={24} md={12}>
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
            <Col xs={24} md={12}>
              <FormSelectField
                size="large"
                name="expenseHeadId"
                options={allExpenseHeads?.map((el) => ({
                  label: el.label,
                  value: el.id,
                }))}
                label="Select Expense Head"
                placeholder="Select"
                required={true}
              />
            </Col>
            <Col xs={24} md={12}>
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
                name="remarks"
                label="Remarks"
                type="text"
                size="large"
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

export default CreateExpense;
