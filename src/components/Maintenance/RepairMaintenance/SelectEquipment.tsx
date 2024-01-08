import FormInput from '@/components/Forms/FormInput';
import FormSelectField from '@/components/Forms/FormSelectField';
import { useGetAllEquipmentQuery } from '@/redux/api/equipment/equipmentApi';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row, Tooltip } from 'antd';
import { useFieldArray, useFormContext } from 'react-hook-form';

const defaultEquipment = {
  equipmentId: null,
  quantity: 1,
  totalPrice: 0,
  remarks: '',
};

const SelectEquipment = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'equipmentUses',
  });

  const handleAppend = () => {
    append(defaultEquipment);
  };
  const handleRemove = (index: number) => remove(index);
  return (
    <Row gutter={[16, 16]}>
      {fields?.map((el: any, index: number) => (
        <EquipmentField
          key={el.id}
          field={el}
          index={index}
          handleRemove={handleRemove}
          control={control}
        />
      ))}
      <Col xs={24} style={{ textAlign: 'center' }}>
        <Tooltip title="Add Row">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="small"
            onClick={handleAppend}
          />
        </Tooltip>
      </Col>
    </Row>
  );
};

export default SelectEquipment;

const EquipmentField = ({ index, handleRemove }: Record<string, any>) => {
  // library
  const { data: equipmentsData } = useGetAllEquipmentQuery(
    { limit: 200, sortBy: 'label', sortOrder: 'asc' },
    { refetchOnMountOrArgChange: true }
  );

  const allEquipments = equipmentsData?.equipments || [];
  // end library
  return (
    <Col
      xs={24}
      style={{ border: '1px solid #99999917', padding: 10, borderRadius: 5 }}
    >
      <Row gutter={[10, 10]}>
        <Col xs={12} xl={6}>
          <FormSelectField
            size="middle"
            name={`equipmentUses[${index}].equipmentId`}
            options={allEquipments?.map((el: any) => ({
              label: el.label,
              value: el.id,
            }))}
            label="Select Equipment"
            placeholder="Select"
            required={true}
          />
        </Col>
        <Col xs={6} xl={4}>
          <FormInput
            name={`equipmentUses[${index}].quantity`}
            label="Quantity"
            type="number"
            size="middle"
            required={true}
          />
        </Col>
        <Col xs={6} xl={4}>
          <FormInput
            name={`equipmentUses[${index}].totalPrice`}
            label="Total Price"
            type="number"
            size="middle"
            required={true}
          />
        </Col>

        <Col xs={24} xl={10}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ paddingRight: 10 }}>
              <FormInput
                name={`equipmentUses[${index}].remarks`}
                label="Remarks"
                type="text"
                size="middle"
              />
            </div>

            <Tooltip title="Remove Row">
              <Button
                type="primary"
                icon={<CloseOutlined style={{ fontSize: 12 }} />}
                size="small"
                style={{ color: '#fff', background: 'red', marginTop: 15 }}
                onClick={() => handleRemove(index)}
              />
            </Tooltip>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
