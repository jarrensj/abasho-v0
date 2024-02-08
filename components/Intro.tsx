'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
  return (
    <div
      id='intro'
      className='min-h-screen px-6 py-16 sm:px-8 grid justify-center items-center'
    >
      <div className='text-center'>
        <Image
          src='/abasho-1.png'
          alt='Abasho means hug'
          width={400}
          height={400}
          className='mb-8 rounded'
        />
        <Link
          href='https://opensea.io/collection/abasho'
          target='_blank'
          className='inline-block py-3 px-8 bg-neutral-300 bg-opacity-50 hover:bg-opacity-78 font-semibold text-sm text-neutral-50 rounded focus:outline-none focus:shadow-outline'
        >
          View on OpenSea
        </Link>
      </div>
    </div>
  );
}
