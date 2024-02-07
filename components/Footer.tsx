import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full'>
      <div className='flex justify-between items-center p-4 py-8 sm:px-8 sm:py-10'>
        <p className='text-xs text-neutral-50'>Abasho means hug</p>
        <Link
          href='https://etherscan.io/address/0xe9c79b33c3a06f5ae7369599f5a1e2ff886e17f0'
          className='text-xs text-neutral-50 hover:underline'
        >
          Etherscan
        </Link>
      </div>
    </footer>
  );
}
