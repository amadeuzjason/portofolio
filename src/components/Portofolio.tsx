import React from 'react'
import port1 from '@/assets/portofolio/va.jpg'
import port2 from '@/assets/portofolio/v.jpg'
import port3 from '@/assets/portofolio/go2.jpg'
import port4 from '@/assets/portofolio/go1.jpg'
import Image from 'next/image'
function Portofolio() {
    return (
        <>
            <div className='container'>
                <div className='w-full px-4'>
                    <div className='max-w-xl mx-auto text-center mb-16'>
                        <h4 className='font-semibold text-lg text-primary mb-2'>Portofolio</h4>
                        <h2 className='font-bold text-dark text-3xl mb-4'>Project Next.js</h2>
                        <p className='font-medium text-md text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit alias dolore similique quasi, reprehenderit et.</p>
                    </div>
                </div>
                <div className='w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto'>
                    <div className='mb-12 p-4 md:w-1/2'>
                        <div className='rounded-md shadow-md overflow-hidden'>
                            <Image src={port1} alt='port1' sizes='100' />
                        </div>
                        <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Proyek Pertama</h3>
                        <p className='font-medium text-base text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus veniam error iste.</p>
                    </div>
                    <div className='mb-12 p-4 md:w-1/2'>
                        <div className='rounded-md shadow-md overflow-hidden'>
                            <Image src={port2} alt='port2' sizes='100' />
                        </div>
                        <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Proyek Kedua</h3>
                        <p className='font-medium text-base text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus veniam error iste.</p>
                    </div>
                    <div className='mb-12 p-4 md:w-1/2'>
                        <div className='rounded-md shadow-md overflow-hidden'>
                            <Image src={port3} alt='port3' sizes='100' />
                        </div>
                        <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Proyek Ketiga</h3>
                        <p className='font-medium text-base text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus veniam error iste.</p>
                    </div>
                    <div className='mb-12 p-4 md:w-1/2'>
                        <div className='rounded-md shadow-md overflow-hidden'>
                            <Image src={port4} alt='port4' sizes='100' />
                        </div>
                        <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Proyek Keempat</h3>
                        <p className='font-medium text-base text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus veniam error iste.</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Portofolio