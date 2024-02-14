"use client"
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';

const SignOutPage = () => {
    useEffect(() => {
        const signOutAsync = async () => {
            await signOut();
        };

        signOutAsync();
    }, []);

    return <p>Signing out...</p>; // You can provide some UI feedback here
};

export default SignOutPage;
