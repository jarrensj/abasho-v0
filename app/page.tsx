import Image from 'next/image';
import { FaTelegramPlane, FaDiscord, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='text-4xl font-bold mb-4'>abasho</h1>
      <Image src='/192.png' alt='abasho 192' width={500} height={500} />
      <div className='mt-4 flex space-x-4'>
        <a
          href='https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxNjQyNTAzNjY2'
          className='text-blue-500 hover:text-blue-700'
        >
          <FaTelegramPlane size={30} />
        </a>
        <a
          href='https://discord.com/invite/eP5EKaGssE'
          className='text-blue-500 hover:text-blue-700'
        >
          <FaDiscord size={30} />
        </a>
        <a
          href='https://twitter.com/AbashoNFT'
          className='text-blue-500 hover:text-blue-700'
        >
          <FaTwitter size={30} />
        </a>
      </div>
    </main>
  );
}
