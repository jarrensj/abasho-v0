import Link from 'next/link';

import { FaTelegramPlane, FaDiscord, FaTwitter } from 'react-icons/fa';

export default function Nav() {
  return (
    <nav
      id='nav'
      className='fade-in fixed bottom-0 left-0 right-0 p-6 sm:p-8 text-neutral-50'
    >
      {/* show only scroll past splash */}
      <div id='mobileButton'>
        <Link
          href='https://opensea.io/collection/abasho'
          target='_blank'
          className='w-full block sm:hidden mb-4 py-2 font-semibold text-center text-sm rounded focus:outline-none focus:shadow-outline border-2'
        >
          View on OpenSea
        </Link>
      </div>

      <div id='bottom' className='flex justify-between items-center'>
        <Link href='/'>
          <h1 className='text-lg text-neutral-50 font-custom font-bold tracking-tighter'>
            abasho
          </h1>
        </Link>

        <Link
          href='https://opensea.io/collection/abasho'
          target='_blank'
          className='hidden sm:block py-2 px-6 font-semibold text-sm rounded focus:outline-none focus:shadow-outline border-2'
        >
          View on OpenSea
        </Link>

        <div id='socials' className='flex gap-4'>
          <Link
            href='https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxNjQyNTAzNjY2'
            className='text-neutral-50 hover:text-neutral-300'
            target='_blank'
          >
            <FaTelegramPlane size={22} />
          </Link>
          <Link
            href='https://discord.com/invite/eP5EKaGssE'
            className='text-neutral-50 hover:text-neutral-300'
            target='_blank'
          >
            <FaDiscord size={22} />
          </Link>
          <Link
            href='https://twitter.com/AbashoNFT'
            className='text-neutral-50 hover:text-neutral-300'
            target='_blank'
          >
            <FaTwitter size={22} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
