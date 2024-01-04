import StockStatus from '@/components/StoreManagement/StockStatus';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VehiTrack | Stock Status',
};

const StockStatusList = () => {
  return <StockStatus />;
};

export default StockStatusList;
