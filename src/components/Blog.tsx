import React from 'react'
import { par1, par2, par3, par4 } from '@/assets/portofolio'
import Link from 'next/link'
import Image from 'next/image'
function Blog() {
    return (
        <>
            <div className='container'>
                <div className='w-full px-4'>
                    <div className='max-w-xl mx-auto text-center mb-16'>
                        <h4 className='font-semibold text-lg text-primary mb-2'>Blog</h4>
                        <h2 className='font-bold text-dark text-3xl mb-4'>Blog Terkini</h2>
                        <p ></p>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
                        <div className='bg-white rounded-xl shadow-xl overflow-hidden mb-10'>
                            <Image src={par1} alt='gambar1' sizes='100vw' />
                            <div className='py-8 px-6'>
                                <h3 className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>Tips Belajar Frontend</h3>
                                <p className='font-medium text-base mb-4 text-secondary '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, doloribus. Provident, explicabo reprehenderit? Repellendus voluptate nesciunt vero, fuga ipsam officiis?</p>
                                <Link className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80' href='#'>Selengkapnya</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
                        <div className='bg-white rounded-xl shadow-xl overflow-hidden mb-10'>
                            <Image src={par2} alt='gambar1' sizes='100vw' />
                            <div className='py-8 px-6'>
                                <h3 className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>Tips Belajar Frontend</h3>
                                <p className='font-medium text-base mb-4 text-secondary '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, doloribus. Provident, explicabo reprehenderit? Repellendus voluptate nesciunt vero, fuga ipsam officiis?</p>
                                <Link className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80' href='#'>Selengkapnya</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
                        <div className='bg-white rounded-xl shadow-xl overflow-hidden mb-10'>
                            <Image src={par3} alt='gambar1' sizes='100vw' />
                            <div className='py-8 px-6'>
                                <h3 className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>Tips Belajar Frontend</h3>
                                <p className='font-medium text-base mb-4 text-secondary '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, doloribus. Provident, explicabo reprehenderit? Repellendus voluptate nesciunt vero, fuga ipsam officiis?</p>
                                <Link className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80' href='#'>Selengkapnya</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog