import { Card } from 'antd';
import { ReactNode } from 'react';

const SheetCard = ({
  title = 'Title',
  value = 0,
  children,
}: {
  title?: string;
  value?: number;
  children: ReactNode;
}) => {
  return (
    <Card
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
