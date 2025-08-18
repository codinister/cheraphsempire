import { NextStudio } from 'next-sanity/studio';
import studioConfig from '@/state/sanity/studioConfig';

const AdminDashboard = () => {
  return <NextStudio config={studioConfig} />;
};

export default AdminDashboard;
