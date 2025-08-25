'use client';

import Aboutus from '@/components/aboutus/Aboutus';
import Contactus from '@/components/contactus/Contactus';
import History from '@/components/history/History';
import Home from '@/components/home/Home';
import Projects from '@/components/projects/Projects';
import Services from '@/components/services/Services';
import Team from '@/components/team/Team';
import Testimonials from '@/components/testimonials/Testimonials';
import Whychooseus from '@/components/whychooseus/Whychooseus';

export default function Page() {
  return (
    <>
      <Home />
      <Whychooseus />
      <Projects />
      <Testimonials />
      <Team />
    </>
  );
}
