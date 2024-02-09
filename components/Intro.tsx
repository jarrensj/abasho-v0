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
      <div>
        <Image
          src='/abasho-1.png'
          alt='Abasho means hug'
          width={400}
          height={400}
          className='mb-6 rounded max-w-[75%] sm:max-w-[100%] m-auto'
          priority={true}
        />
        <h2 className='text-4xl sm:text-6xl text-center font-custom font-bold tracking-tighter'>
          abasho
        </h2>
      </div>
    </div>
  );
}
