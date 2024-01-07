import ConfirmDialog from '@/components/ui/ConfirmDialog';
import { useDeleteMaintenanceMutation } from '@/redux/api/maintenance/maintenanceApi';
import { AppstoreOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import { useState } from 'react';
import ViewMaintenance from './ViewMaintenance';

interface IProps {
  data: any;
}

const MaintenanceAction = ({ data }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const [deleteMaintenance] = useDeleteMaintenanceMutation();

  const handleDelete = async () => {
    try {
      message.loading('Deleting.....');
      setConfirm(false);
      const res = await deleteMaintenance(data?.id).unwrap();
      if (res) {
        message.success('Successfully Deleted!');
      }
    } catch (error: any) {
      message.error(`${error.data}`);
    }
  };

  return (
    <>
      <Button
        style={{
          margin: '0px 5px',
        }}
        onClick={() => setOpen(true)}
        type="primary"
        size="small"
      >
        <AppstoreOutlined />
      </Button>
      <Button
        type="primary"
        size="small"
        onClick={() => {
          setConfirm(true);
        }}
        danger
        style={{ marginLeft: '3px' }}
      >
        <DeleteOutlined />
      </Button>
      {/* popup items */}
      <ViewMaintenance
        open={open}
        handleClose={() => setOpen(false)}
        data={data}
      />
      <ConfirmDialog
        title="Delete Maintenance"
        open={confirm}
        onOk={handleDelete}
        onCancel={() => setConfirm(false)}
      />
      {/* end popup items */}
    </>
  );
};

export default MaintenanceAction;
