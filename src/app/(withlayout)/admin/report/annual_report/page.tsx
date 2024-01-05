import AnnualReport from '@/components/Report/AnnualReport';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VehiTrack | Annual Report',
};

const AnnualReportPage = () => {
  return <AnnualReport />;
};

export default AnnualReportPage;
