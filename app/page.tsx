import Script from 'next/script';

import Nav from '@/components/Nav';
import Intro from '@/components/Intro';
import About from '@/components/About';
import Collective from '@/components/Collective';

export default function Home() {
  return (
    <main className='text-neutral-900 mb-24'>
      <Script src='/js/abasho.js' />
      <Intro />
      <About />
      <Collective />
      <Nav />
    </main>
  );
}
