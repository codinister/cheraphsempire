'use client';

import Aboutus from '@/components/aboutus/Aboutus';
import History from '@/components/history/History';
import PageHeader from '@/components/PageHeader';
import Whychooseus from '@/components/whychooseus/Whychooseus';

export default function Page() {
  return (
    <>
      <PageHeader title="About Us" />
      <Aboutus />
      <Whychooseus />
      <History />
    </>
  );
}
