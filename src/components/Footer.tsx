import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col h-full w-full bg-slate-950 py-6 px-8 text-center text-white'>
            <p className='border-white border-2px border-solid'>Terms & Condition | Privacy Policy</p>
            <p>All rights reserved by © <span className='text-red-500 italic'>Thinkers Corporation Private Limited</span></p>
        </div>
      )
}

export default Footer