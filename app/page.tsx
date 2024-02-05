import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col items-center p-24'>
      <Image src='/192.png' alt='abasho 192' width={500} height={500} />
    </main>
  );
}
