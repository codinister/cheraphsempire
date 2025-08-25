'use client';

import { NextStudio } from 'next-sanity/studio';
import studioConfig from '@/state/sanity/studioConfig';

const AdminDashboard = () => {
  return <div style={{marginTop: '20rem'}}>
    <NextStudio config={studioConfig} />
  </div>
};

export default AdminDashboard;
