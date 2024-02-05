import { FaTelegramPlane, FaDiscord, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='mt-4 flex space-x-4'>
      <Link
        href='https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxNjQyNTAzNjY2'
        className='text-blue-500 hover:text-blue-700'
        target='_blank'
      >
        <FaTelegramPlane size={30} />
      </Link>
      <Link
        href='https://discord.com/invite/eP5EKaGssE'
        className='text-blue-500 hover:text-blue-700'
        target='_blank'
      >
        <FaDiscord size={30} />
      </Link>
      <Link
        href='https://twitter.com/AbashoNFT'
        className='text-blue-500 hover:text-blue-700'
        target='_blank'
      >
        <FaTwitter size={30} />
      </Link>
    </footer>
  );
}
