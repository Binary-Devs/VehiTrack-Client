import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
import UpdateMaintenanceHead from './UpdateMaintenanceHead';

interface IProps {
  data: any;
}

const MaintenanceHeadAction = ({ data }: IProps) => {
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
      <UpdateMaintenanceHead
        open={open}
        handleClose={() => setOpen(false)}
        preData={data}
      />

      {/* end popup items */}
    </>
  );
};

export default MaintenanceHeadAction;
