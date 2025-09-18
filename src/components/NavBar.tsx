'use client';

import AuthButton from './auth/AuthButton';
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="container mx-auto flex justify-between items-center p-3 max-w-4xl">
            <Link href="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 uppercase">
                Casino
            </Link>
            <AuthButton />
        </nav>
    );
}
