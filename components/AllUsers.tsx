"use client"
import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { useRouter } from 'next/navigation';

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

interface Users {
    users: User[];
}

const AllUsers = ({ users }: Users) => {
    const router = useRouter();

    const handleRowClick = (id: number) => {
        router.push(`/users/${id}`); // Navigate to the dynamic user route
    };
    return (
        <>
            <Table>
                <TableCaption >A list of all users</TableCaption>
                <TableHeader className='border-b-white/20 text-white' >
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Username</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Website</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        users.map((user) => (
                            <TableRow key={user.id} onClick={() => handleRowClick(user.id)} className='cursor-pointer'>
                                <TableCell className='text-[16px] font-bold text-white'>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.website}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default AllUsers