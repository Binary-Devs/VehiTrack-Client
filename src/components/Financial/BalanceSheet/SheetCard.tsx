import { Card } from 'antd';
import { ReactNode } from 'react';

const SheetCard = ({
  title = 'Title',
  value = 0,
  loading = false,
  children,
}: {
  title?: string;
  value?: number;
  loading?: boolean;
  children: ReactNode;
}) => {
  return (
    <Card
      loading={loading}
      title={title}
      extra={<p style={{ fontWeight: 700 }}>{value}</p>}
      headStyle={{
        background: '#ebeaea',
      }}
    >
      {children}
    </Card>
  );
};

export default SheetCard;
