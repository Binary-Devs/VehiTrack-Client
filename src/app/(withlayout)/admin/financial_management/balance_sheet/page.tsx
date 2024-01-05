import BalanceSheet from '@/components/Financial/BalanceSheet';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VehiTrack | Balance Sheet',
};

const BalanceSheetPage = () => {
  return <BalanceSheet />;
};

export default BalanceSheetPage;
