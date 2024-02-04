import Image from 'next/image';
import { FaTelegramPlane, FaDiscord, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-4">abasho</h1>
      <Image src="/192.png" alt="abasho 192" width={500} height={500} />
      <div className="mt-4 flex space-x-4">
        <Link href="https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxNjQyNTAzNjY2" className="text-blue-500 hover:text-blue-700" target="_blank">
          <FaTelegramPlane size={30} />
        </Link>
        <Link href="https://discord.com/invite/eP5EKaGssE" className="text-blue-500 hover:text-blue-700" target="_blank">
          <FaDiscord size={30} />
        </Link>
        <Link href="https://twitter.com/AbashoNFT" className="text-blue-500 hover:text-blue-700" target="_blank">
          <FaTwitter size={30} />
        </Link>
      </div>
    </main>
  );
}
