'use client';

import AuthButton from './auth/AuthButton';
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="container mx-auto flex justify-between items-center p-4 sm:py-6 max-w-4xl">
            <Link href="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 uppercase cursor-default">
                Casino
            </Link>
            <AuthButton />
        </nav>
    );
}