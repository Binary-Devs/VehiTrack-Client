import { useDeleteAccidentHistoryMutation } from '@/redux/api/accidentHistory/accidentHistoryApi';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import { useState } from 'react';
import ConfirmDialog from '../ui/ConfirmDialog';
import UpdateAccidentHistory from './UpdateAccidentHistory';

interface IProps {
  data: any;
}

const AccidentHistoryAction = ({ data }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const [deleteAccidentHistory] = useDeleteAccidentHistoryMutation();

  const handleDelete = async () => {
    try {
      message.loading('Deleting.....');
      setConfirm(false);
      const res = await deleteAccidentHistory(data?.id).unwrap();
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
        <EditOutlined />
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
      <UpdateAccidentHistory
        open={open}
        handleClose={() => setOpen(false)}
        preData={data}
      />
      <ConfirmDialog
        title="Delete Accident History"
        open={confirm}
        onOk={handleDelete}
        onCancel={() => setConfirm(false)}
      />
      {/* end popup items */}
    </>
  );
};

export default AccidentHistoryAction;
