import UMTable from '@/components/ui/Table';
import { Col, Modal, Row } from 'antd';
import dayjs from 'dayjs';

type IProps = {
  open: boolean;
  handleClose: any;
  data: any;
};
const ViewMaintenance = ({ open, handleClose, data }: IProps) => {
  const allEquipments = data?.equipmentUses || [];
  const columns = [
    {
      title: 'SN',
      align: 'center',
      render: (data: any, item: any, index: any) => index + 1,
    },
    {
      title: 'Description',
      dataIndex: 'equipment',
      render: (el: any) => el?.label,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      align: 'right',
    },
    {
      title: 'Unit Price',
      dataIndex: 'unitPrice',
      align: 'right',
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      align: 'right',
    },
  ];
  return (
    <Modal
      title="Maintenance Bill"
      centered
      open={open}
      onCancel={handleClose}
      width={750}
      footer={null}
    >
      <div style={{ overflow: 'auto' }}>
        <div
          style={{
            paddingTop: 10,
            width: 635,
            margin: 'auto',
          }}
        >
          <h3
            style={{
              fontSize: 22,
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: 32,
              marginTop: 16,
              lineHeight: 1,
              color: '#614cab',
            }}
          >
            Invoice/Bill
          </h3>
          <Row gutter={[64, 32]}>
            <Col xs={12}>
              <Row gutter={[16, 16]}>
                <Col xs={24}>
                  <MainItem
                    title="Date"
                    value={dayjs(data?.date).format('DD/MM/YYYY')}
                  />
                </Col>
                <Col xs={24}>
                  <MainItem title="Vehicle" value={data?.vehicle?.regNo} />
                </Col>
                <Col xs={24}>
                  <MainItem title="Driver" value={data?.driver?.fullName} />
                </Col>
                <Col xs={24}>
                  <MainItem title="Workshop Type" value={data?.workshopType} />
                </Col>
                <Col xs={24}>
                  <MainItem
                    title="Maintenance Type"
                    value={data?.maintenanceType}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Row gutter={[16, 16]}>
                <Col xs={24}>
                  <MainItem title="Head" value={data?.maintenanceHead?.label} />
                </Col>
                <Col xs={24}>
                  <MainItem title="Odometer" value={data?.odoMeter} />
                </Col>
                <Col xs={24}>
                  <MainItem
                    title="Service Charge"
                    value={data?.serviceCharge}
                  />
                </Col>
                <Col xs={24}>
                  <MainItem
                    title="Workshop Details"
                    value={data?.workshopDetails || 'n/a'}
                  />
                </Col>
                <Col xs={24}>
                  <MainItem title="Remarks" value={data?.remarks || 'n/a'} />
                </Col>
              </Row>
            </Col>
          </Row>
          <p
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: '#666',
              marginBottom: 4,
              marginTop: 30,
            }}
          >
            Item Details
          </p>
          <UMTable
            columns={columns}
            dataSource={allEquipments}
            showSizeChanger={false}
            showPagination={false}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ViewMaintenance;

const MainItem = ({ title, value }: { title: string; value: any }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'space-between',
      }}
    >
      <p style={{ fontWeight: 700, paddingLeft: 5 }}>{title}:</p>
      <p>{value}</p>
    </div>
  );
};
