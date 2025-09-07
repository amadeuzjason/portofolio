import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
function About() {
    return (
        <>
            <div className='container'>
                <div className='flex flex-wrap'>
                    <div className='w-full px-4 mb-10 lg:w-1/2'>
                        <h4 className='font-bold uppercase text-primary text-lg mb-3'>Tentang Kami</h4>
                        <h2 className='font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl'>Ayo Belajar Frontend dengan Next.js</h2>
                        <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus accusamus minima consectetur sed possimus sint magni itaque placeat voluptas blanditiis.</p>
                    </div>
                    <div className='w-full px-4 lg:w-1/2'>
                        <h3 className='font-semibold text-dark text-2xl mb-4 lg:mt-10'>Mari bergabung dengan kami</h3>
                        <p className='font-medium text-base text-slate-400 max-w-xl lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi cupiditate doloribus corporis illo cum debitis amet odio. Possimus, velit!</p>
                        <div className='flex items-center'>
                            <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-primary'>
                                <FaInstagram />
                            </Link>
                            <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-primary'>
                                <FaFacebook />
                            </Link>
                            <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-primary'>
                                <FaYoutube />
                            </Link>
                            <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-primary'>
                                <FaWhatsapp />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About