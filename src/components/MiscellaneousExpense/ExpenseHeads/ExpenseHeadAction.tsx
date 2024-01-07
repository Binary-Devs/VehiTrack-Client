import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
import UpdateExpenseHead from './UpdateExpenseHead';

interface IProps {
  data: any;
}

const ExpenseHeadAction = ({ data }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);

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
      {/* popup items */}
      <UpdateExpenseHead
        open={open}
        handleClose={() => setOpen(false)}
        preData={data}
      />

      {/* end popup items */}
    </>
  );
};

export default ExpenseHeadAction;
