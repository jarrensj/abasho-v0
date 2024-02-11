import Image from 'next/image';

export default function Intro() {
  return (
    <div
      id='intro'
      className='fade-in min-h-screen px-6 py-16 sm:px-8 grid justify-center items-center'
    >
      <div>
        <Image
          src='/abasho-1.png'
          alt='Abasho means hug'
          width={400}
          height={400}
          className='mb-6 rounded max-w-[75%] sm:max-w-[100%] m-auto'
          priority={true}
        />
        <h2 className='text-4xl sm:text-5xl text-center font-custom font-bold tracking-tighter'>
          abasho
        </h2>
      </div>
    </div>
  );
}
