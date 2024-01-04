import FuelStatus from '@/components/FuelManagement/FuelStatus';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VehiTrack | Fuel Status',
};

const FuelStatusPage = () => {
  return <FuelStatus />;
};

export default FuelStatusPage;
