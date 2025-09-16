'use client';


import Home from '@/components/home/Home';
import Mining from '@/components/Mining';
import Projects from '@/components/projects/Projects';
import Team from '@/components/team/Team';
import Testimonials from '@/components/testimonials/Testimonials';
import Whychooseus from '@/components/whychooseus/Whychooseus';

export default function Page() {
  return (
    <>
      <Home />
      <Whychooseus />
      <Projects />
      <Mining  />
      <Testimonials />
      <Team />
    </>
  );
}
