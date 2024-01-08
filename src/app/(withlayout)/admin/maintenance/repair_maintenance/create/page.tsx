import CreateMaintenance from '@/components/Maintenance/RepairMaintenance/CreateMaintenance';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VehiTrack | Create Maintenance',
};

const CreateMaintenancePage = () => {
  return <CreateMaintenance />;
};

export default CreateMaintenancePage;
