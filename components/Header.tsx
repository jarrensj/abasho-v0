import Link from 'next/link';

import { FaTelegramPlane, FaDiscord, FaTwitter } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='w-full'>
      <div
        id='top'
        className='flex justify-between items-center p-4 py-6 sm:p-8'
      >
        <Link href='/'>
          <h1 className='font-bold text-6xl'>Abasho</h1>
        </Link>

        <Link
          href='https://opensea.io/collection/abasho'
          target='_blank'
          className='py-2 px-4 bg-neutral-300 bg-opacity-50 hover:bg-opacity-78 font-semibold text-sm text-neutral-50 rounded focus:outline-none focus:shadow-outline'
        >
          View on OpenSea
        </Link>
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
