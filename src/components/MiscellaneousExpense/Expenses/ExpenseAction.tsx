import ConfirmDialog from '@/components/ui/ConfirmDialog';
import { useDeleteExpenseMutation } from '@/redux/api/expense/expenseApi';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import { useState } from 'react';
import UpdateExpense from './UpdateExpense';

interface IProps {
  data: any;
}

const ExpenseAction = ({ data }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const [deleteExpense] = useDeleteExpenseMutation();

  const handleDelete = async () => {
    try {
      message.loading('Deleting.....');
      setConfirm(false);
      const res = await deleteExpense(data?.id).unwrap();
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
      <UpdateExpense
        open={open}
        handleClose={() => setOpen(false)}
        preData={data}
      />
      <ConfirmDialog
        title="Delete Expense"
        open={confirm}
        onOk={handleDelete}
        onCancel={() => setConfirm(false)}
      />
      {/* end popup items */}
    </>
  );
};

export default ExpenseAction;
