import CreateDriver from '@/components/CreateFrom/DriverCreate';
import React from 'react';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Driver create',
  description: '...',
}
const DriveCreate = () => {
  return (
    <>
      <CreateDriver/>
    </>
  );
};

export default DriveCreate;