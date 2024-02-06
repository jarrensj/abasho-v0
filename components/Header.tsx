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

      <div id='bottom' className='flex justify-center items-center'>
        <Link
          href='https://opensea.io/collection/abasho'
          target='_blank'
          className='text-neutral-50 hover:text-neutral-300 w-full inline-block text-center p-4 px-8'
        >
          View on OpenSea
        </Link>
      </div>
    </header>
  );
}
