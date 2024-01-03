import MaintenanceHeads from '@/components/Maintenance/MaintenanceHeads';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VehiTrack | Maintenance Head',
};

const MaintenanceHeadPage = () => {
  return <MaintenanceHeads />;
};

export default MaintenanceHeadPage;
