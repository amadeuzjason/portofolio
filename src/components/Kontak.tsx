import React from 'react'

function Kontak() {
    return (
        <>
            <div className='container'>
                <div className='w-full px-4'>
                    <div className='max-w-xl mx-auto text-center mb-16'>
                        <h4 className='font-semibold text-lg text-primary mb-2'>Kontak</h4>
                        <h2 className='font-bold text-dark text-3xl mb-4'>Hubungi Kami</h2>
                        <p className='font-medium text-md text-secondary '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia sunt qui, assumenda quae corrupti voluptatem!</p>
                    </div>
                </div>
                <div className='w-full lg:w-2/3 lg:mx-auto'>
                    <form>
                        <div className='w-full px-4 mb-8'>
                            <label className='text-base text-primary font-bold'>Nama</label>
                            <input type='text' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none' />
                        </div>
                        <div className='w-full px-4 mb-8'>
                            <label className='text-base text-primary font-bold'>E-mail</label>
                            <input type='text' className='w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none' />
                        </div>
                        <div className='w-full px-4 mb-8'>
                            <label className='text-base text-primary font-bold'>Pesan</label>
                            <textarea className='h32 w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none' />
                        </div>
                        <div className='w-full'>
                            <button className='text-base font-semibold text-white bg-primary px-8 py-4 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500'>Kirim</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Kontak