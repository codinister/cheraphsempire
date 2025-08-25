'use client';

import PageHeader from '@/components/PageHeader';
import Projects from '@/components/projects/Projects';
import Services from '@/components/services/Services';
import Testimonials from '@/components/testimonials/Testimonials';

export default function Page() {
  return (
    <>
      <PageHeader title="Services" />
      <Testimonials />
      <Services />
    </>
  );
}
