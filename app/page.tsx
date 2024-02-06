import About from '@/components/About';
import Collective from '@/components/Collective';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div id='container' className='p-8'>
        <h2 className='text-6xl'>ABASHO MEANS HUG</h2>
        <Collective />
        <About />
      </div>
    </main>
  );
}
