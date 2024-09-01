import Link from 'next/link'
import React from 'react'

const MobileNav = () => {
  return (
    <div className='h-[120px] container mx-auto'>
      <Link href={"/"} className='w-full flex items-center flex-col'>
        <div className='h-14 text-xl font-semibold text-primary w-14 bg-accent rounded-full flex justify-center items-center'>K</div>
        <p>Koach</p>
      </Link>
    </div>
  )
}

export default MobileNav