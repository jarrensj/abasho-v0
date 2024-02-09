import Image from 'next/image';
import Link from 'next/link';

export default function Collective() {
  return (
    <div
      id='collective'
      className='min-h-screen px-6 py-16 sm:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 xl:gap-24'
    >
      <div id='collective--textContainer'>
        <h2 className='text-4xl sm:text-6xl font-custom font-bold tracking-tighter mb-8'>
          <span className='block'>TALENT IS EVENLY DISTRIBUTED,</span>
          <span className='block'>OPPORTUNITY IS NOT</span>
        </h2>
        <div style={{ maxWidth: 1000 }}>
          <p className='leading-relaxed'>
            Abasho Collective exists to change that. Lack of technological
            understanding and misconceptions about NFTs/Crypto keep thousands of
            talented artists from accessing the tremendous opportunities
            available in web3. Abasho Collective is dedicated to identifying,
            onboarding, and equipping emerging artists for success in the
            digital decentralized world.
          </p>
        </div>
      </div>

      <div id='about--imageContainer'>
        <Link
          href='https://opensea.io/collection/the-lost-astronauts-abasho'
          target='_blank'
          className='block mb-2'
        >
          <Image
            src='/astro2.png'
            alt='“Lost Astronaut #143” by Abasho Collective artist Ken Kelleher'
            width={750}
            height={750}
            className='mb-2 rounded'
          />
        </Link>
        <span className='block text-xs'>
          Lost Astronaut #143” by Abasho Collective artist Ken Kelleher
        </span>
      </div>
    </div>
  );
}
