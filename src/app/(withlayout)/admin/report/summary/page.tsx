import SummaryReport from '@/components/Report/SummaryReport';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VehiTrack | Summary Report',
};

const SummaryReportPage = () => {
  return <SummaryReport />;
};

export default SummaryReportPage;
