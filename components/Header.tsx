import Link from 'next/link';

import { FaTelegramPlane, FaDiscord, FaTwitter } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='w-full'>
      <div
        id='top'
        className='flex justify-between items-center p-4 py-6 sm:p-8'
      >
        <div id='links' className='flex gap-2 text-neutral-50'>
          <h1 className='font-bold'>Abasho</h1>
          <span className='mx-2'>|</span>
          <Link href='/#' className='hover:underline'>
            Collective
          </Link>
          <Link href='/#' className='hover:underline'>
            About
          </Link>
        </div>
        <div id='opensea' className='hidden sm:block'>
          <Link
            href='https://opensea.io/collection/abasho'
            target='_blank'
            className='py-2 px-4 bg-neutral-300 bg-opacity-50 hover:bg-opacity-78 font-semibold text-sm text-neutral-50 rounded focus:outline-none focus:shadow-outline'
          >
            View on OpenSea
          </Link>
        </div>
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

      <div id='bottom' className='w-full flex sm:hidden p-4 pt-0'>
        <Link
          href='https://opensea.io/collection/abasho'
          target='_blank'
          className='w-full py-4 bg-neutral-300 bg-opacity-50 hover:bg-opacity-85 font-semibold text-center text-sm text-neutral-50 rounded focus:outline-none focus:shadow-outline'
        >
          View on OpenSea
        </Link>
      </div>
    </header>
  );
}
