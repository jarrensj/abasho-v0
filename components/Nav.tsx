import Link from 'next/link';

import { FaTelegramPlane, FaDiscord, FaTwitter } from 'react-icons/fa';

export default function Nav() {
  return (
    <nav className='fixed bottom-0 left-0 right-0 p-6 sm:p-8'>
      {/* show only scroll past splash */}
      <div id='mobileButton' className='w-full flex sm:hidden mb-4'>
        <Link
          href='https://opensea.io/collection/abasho'
          target='_blank'
          className='w-full py-2 bg-neutral-300 bg-opacity-50 hover:bg-opacity-85 font-semibold text-center text-sm text-neutral-50 rounded focus:outline-none focus:shadow-outline'
        >
          View on OpenSea
        </Link>
      </div>

      <div id='bottom' className='flex justify-between items-center'>
        <Link href='/'>
          <h1 className='text-lg text-neutral-50'>abasho</h1>
        </Link>

        <Link
          href='https://opensea.io/collection/abasho'
          target='_blank'
          className='hidden sm:block py-2 px-6 bg-neutral-300 bg-opacity-50 hover:bg-opacity-78 font-semibold text-sm text-neutral-50 rounded focus:outline-none focus:shadow-outline'
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
