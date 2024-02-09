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
          className='mb-6 rounded'
        />
        <h2 className='text-4xl font-semibold'>abasho</h2>
      </div>
    </div>
  );
}
