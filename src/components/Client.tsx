import React from 'react'
import { part1, part2, part3, part4, part5 } from '@/assets/partner'
import Link from 'next/link'
import Image from 'next/image'
function Client() {
     return (
          <>
               <div className='container'>
                    <div className='w-full px-4'>
                         <div className='max-w-xl mx-auto text-center mb-16'>
                              <h4 className='font-semibold text-lg text-primary mb-2'>Client</h4>
                              <h2 className='font-bold text-white text-3xl mb-4'>Partner Projek</h2>
                              <p className='font-medium text-md text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corporis amet libero?</p>
                         </div>
                    </div>
                    <div className='w-full px-4'>
                         <div className='flex flex-wrap items-center justify-center'>
                              <Link href='#' className='max-w-[110px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                                   <Image src={part1} alt='client1' />
                              </Link>
                              <Link href='#' className='max-w-[110px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                                   <Image src={part2} alt='client2' />
                              </Link>
                              <Link href='#' className='max-w-[110px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                                   <Image src={part3} alt='client3' />
                              </Link>
                              <Link href='#' className='max-w-[110px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                                   <Image src={part4} alt='client4' />
                              </Link>
                              <Link href='#' className='max-w-[110px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                                   <Image src={part5} alt='client5' />
                              </Link>
                         </div>
                    </div>
               </div>
          </>

     )
}

export default Client