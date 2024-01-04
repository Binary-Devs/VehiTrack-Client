import AccidentHistory from '@/components/AccidentHistory';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VehiTrack | Accident History',
};

const AccidentHistoryPage = () => {
  return <AccidentHistory />;
};

export default AccidentHistoryPage;
