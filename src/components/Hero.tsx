import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Foto from '@/assets/json.png'

function Hero() {
  return (
    <div className='container'>
        <div className='flex flex-wrap'>
            <div className='w-full self-center p-4 lg:w-1/2'>
                <h1 className='text-base font-semibold text-primary md:text-lg lg:text-2xl'>Welcome to My Sites <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl'>with XI RPL 4</span></h1>
                <h2 className='font-medium text-secondary text-lg mb-5 lg:text-2xl'>Kumpulan para frontend developer muda</h2>
                <p className='font-medium text-secondary mb-10 leading-relaxed'>I'm a Designer Graphic also a Programmer.</p>
                <Link href='#' className='text-base font-bold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-70 transition ease-in-out duration-300'>Hubungi Kami</Link>
            </div>
            <div className='w-full self-end p-4 lg:w-1/2'>
                <div className='relative mt-10 lg:-mt-20 right-0'>
                    <Image src={Foto} alt='promighty' width={350} className='max-w-full mx-auto'/>
                    <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10'> 
                    <svg width={600} height={600} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#2dd4bf" d="M31.4,-19.2C40.9,-1.8,48.8,15.5,43.4,27.9C37.9,40.3,18.9,47.9,-4.3,50.4C-27.5,52.8,-55,50.2,-62.8,36.5C-70.6,22.7,-58.8,-2.2,-45.1,-22.2C-31.4,-42.1,-15.7,-57.1,-2.3,-55.8C11,-54.4,22,-36.7,31.4,-19.2Z" transform="translate(100 100)" />
                    </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Hero