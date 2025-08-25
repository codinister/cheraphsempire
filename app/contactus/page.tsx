'use client';

import Contactus from '@/components/contactus/Contactus';
import PageHeader from '@/components/PageHeader';
import Testimonials from '@/components/testimonials/Testimonials';

export default function Page() {
  return (
    <>
          <PageHeader title="Contact Us" />
      <Contactus />
      <Testimonials />
    </>
  );
}
