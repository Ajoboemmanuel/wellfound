import React from 'react'
import UserItem from './UserItem'
import DesktopCommand from './DesktopCommand'
import Link from 'next/link'

const DesktopNav = () => {
    return (
        <section className=" h-full w-full flex justify-center container mx-auto p-4">
            <Link href={"/"} className='w-full flex items-center flex-col'>
                <div className='h-14 text-xl font-semibold text-primary w-14 bg-accent rounded-full flex justify-center items-center'>K</div>
                <p>Koach</p>
            </Link>
        </section>

    )
}

export default DesktopNav