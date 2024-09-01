import React from 'react'

const UserItem = () => {
  return (
    <div className='border rounded-[8px] p-2 flex justify-between items-center hover:cursor-pointer'>
        <div className='h-14 w-14 bg-accent flex items-center justify-center rounded-full'> 
            <p className='text-primary'>TD</p>
            
        </div>
        <div>
            <h3 className='flex justify-between items-center'>Tech Dev <span className='text-[12px] text-accent'>Admin</span></h3>
            <p className='text-[12px] text-white/60'>ajoboemmanuel04@gmail.com</p>
        </div>
    </div>
  )
}

export default UserItem