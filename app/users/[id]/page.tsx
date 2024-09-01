"use client";

import UserProfile from '@/components/UserComp';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

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

const UserFetcher = () => {
    const param = useParams();
    const id = param.id;

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchDataUser = async (userId: string) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error("Error Fetching Data", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchDataUser(id as string);
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;

    return (
        <>
            {user ? (
                <div>
                    <UserProfile user={user} />
                </div>
            ) : (
                <div>Not found...</div>
            )}
        </>
    );
};

export default UserFetcher;
