import React from 'react'
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

interface Props {
    user: User;
}


const UserProfile = ({ user }: Props) => {
    return (
        <div className='container mx-auto p-4'> 
        <h1 className='text-3xl font-bold mb-4'> User Information </h1>
            <ul className='grid w-[70%] lg:w-1/2'>
                <li>
                    <p>Name</p>
                    <span>{user.name}</span>
                </li>

                <li>
                    <p>UserName</p>
                    <span>{user.username}</span>
                </li>

                <li>
                    <p>Email</p>
                    <span>{user.email}</span>
                </li>

                <li>
                    <p>Phone</p>
                    <span>{user.phone}</span>
                </li>

                <li>
                    <p>Website</p>
                    <span>{user.website}</span>
                </li>

                <li>
                    <p>Address</p>
                    <h3><span>{user.address.suite}</span> <span>{user.address.street}</span></h3>
                </li>

            
                <li>
                    <p>City</p>
                    <span>{user.address.city}</span>
                </li>

                <li>
                    <p>Company</p>
                    <span>{user.company.name}</span>
                </li>

            </ul>
        </div>
    )
}

export default UserProfile
