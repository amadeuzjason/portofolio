import React from 'react'
import port1 from   '@/assets/Portfolio/CSS-Logo.png'
import port2 from   '@/assets/Portfolio/JavaScript-Logo.png'
import port3 from   '@/assets/Portfolio/LogoReactJS.png'
import port4 from   '@/assets/Portfolio/php_Logo.png'
import Image from 'next/image'


function Portfolio() {
  return (
    <>
    <div className='container'>
        <div className='w-full px-4'>
            <div className='max-w-xl mx-auto text-center mb-16'>
                <h4 className='font-semibold text-lg text-primary mb-2'>
                    Portfolio
                </h4>
                <h2 className='font-bold text-dark text-3xl mb-4'>
                    Project Frontend next.js
                </h2>
                <p className='font-medium text-md text-secondary'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat aliquam dolore at libero! Sint commodi consectetur minima earum eveniet?
                </p>
            </div>

       {/* Portfolio settings for images and others */}

        </div>
        <div className='w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto'>
             <div className='mb-12 p-4 md:w-1/2'>
         <div className='rounded-md shadow-md overflow-hidden'>
            <Image src={port1} alt='port1' sizes='100vw'/>
             </div>
             <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>
                Project Pertama
             </h3>
             <p className='font-medium text-base text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorum facere sapiente.
             </p>
             </div>
             <div className='mb-12 p-4 md:w-1/2'>
         <div className='rounded-md shadow-md overflow-hidden'>
            <Image src={port2} alt='port2' sizes='100vw'/>
             </div>
             <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>
                Project Kedua
             </h3>
             <p className='font-medium text-base text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorum facere sapiente.
             </p>
             </div>
             <div className='mb-12 p-4 md:w-1/2'>
         <div className='rounded-md shadow-md overflow-hidden'>
            <Image src={port3} alt='port3' sizes='100vw'/>
             </div>
             <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>
                Project Ketiga
             </h3>
             <p className='font-medium text-base text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorum facere sapiente.
             </p>
             </div>
             <div className='mb-12 p-4 md:w-1/2'>
         <div className='rounded-md shadow-md overflow-hidden'>
            <Image src={port4} alt='port4' sizes='100vw'/>
             </div>
             <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>
                Project Keempat
             </h3>
             <p className='font-medium text-base text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorum facere sapiente.
             </p>
             </div>
        </div>
    </div>
    </>
  )
}

export default  Portfolio