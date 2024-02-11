import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div id='about' className='min-h-screen px-6 py-24 sm:px-8'>
      <h2 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-custom font-bold tracking-tighter mb-8 md:mb-12'>
        <span id='abasho' className='block'>
          ABASHO
        </span>
        <span id='means' className='inline-block mr-5'>
          MEANS
        </span>
        <span id='hug' className='inline-block'>
          HUG
        </span>
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 xl:gap-24'>
        <div id='about--textContainer'>
          <p className='text-lg mb-4 leading-relaxed'>
            Abasho is a collective of web3 enthusiasts whose main goal is to
            assist upcoming artists in sharing their talents with the world.
          </p>
          <p className='mb-4 leading-relaxed'>
            Built on a foundation of love and positivity, the word
            &quot;Abasho&quot; comes from the word Abrazo (hug in Spanish).
            Sometimes children struggle with the letters R and Z while learning
            Spanish so they say &quot;abasho&quot; when they want a hug.
          </p>
          <p className='mb-4 leading-relaxed'>
            The project was originally created by artist & developer{' '}
            <Link
              href='https://twitter.com/cvasqxz'
              target='_blank'
              className='underline'
            >
              @cvasqxz
            </Link>{' '}
            as a gift to supporters of a previous project. Since then it has
            snowballed into a true movement; A movement to spread positivity and
            joy through unique, curated collections from upcoming artists, to
            the NFT space and beyond.
          </p>
          <p className='leading-relaxed'>
            Abasho itself is a charming 250 piece cc0 collection with 0%
            royalties. All curated collections from our featured artists will be
            less than or equal to this same size. Each Abasho holder is able to
            vote on which artists are featured, and claim one or more items in
            each new limited collection. Abasho is also home to Alphabasho, an
            elite alpha group that works collaboratively to deliver value to the
            project through NFT research.
          </p>
        </div>

        <div
          id='about--gridContainer'
          className='grid justify-center items-center'
        >
          <div className='hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 md:gap-4 lg:gap-0 margin-auto'>
            <div>
              <Image
                src='/abasho-2.png'
                alt='Abasho means hug'
                width={750}
                height={750}
                className='rounded'
              />
            </div>
            <div className='hidden sm:block'>&nbsp;</div>
            <div>
              {' '}
              <Image
                src='/abasho-3.png'
                alt='Abasho means hug'
                width={750}
                height={750}
                className='rounded'
              />
            </div>
            <div className='hidden sm:block'>&nbsp;</div>
            <div>
              {' '}
              <Image
                src='/abasho-5.png'
                alt='Abasho means hug'
                width={750}
                height={750}
                className='rounded'
              />
            </div>
            <div className='hidden sm:block'>&nbsp;</div>
            <div>
              {' '}
              <Image
                src='/abasho-6.png'
                alt='Abasho means hug'
                width={750}
                height={750}
                className='rounded'
              />
            </div>
            <div className='hidden sm:block'>&nbsp;</div>
            <div>
              {' '}
              <Image
                src='/abasho-7.png'
                alt='Abasho means hug'
                width={750}
                height={750}
                className='rounded'
              />
            </div>
          </div>

          <Image
            src='/abasho.gif'
            alt='Abasho means hug'
            width={750}
            height={750}
            className='rounded block sm:hidden'
          />
        </div>
      </div>
    </div>
  );
}
