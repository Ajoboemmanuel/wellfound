"use client"
import AllUsers from '@/components/AllUsers';
import Test from '@/components/Test';
import React, { useEffect, useState } from 'react'


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


const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  const fetchAllUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
      console.log(users)
    } catch (error) {
      console.error('Error fetching users', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllUsers();
  })

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className='container mx-auto p-4 h-full'>
        <AllUsers users={users} />
        {/* <Test  /> */}
      </div>
    </>
  )
}

export default Home