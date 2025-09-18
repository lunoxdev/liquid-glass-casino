'use client';

import AuthButton from './auth/AuthButton';
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    Casino
                </Link>
                <div>
                    <AuthButton />
                </div>
            </div>
        </nav>
    );
}
