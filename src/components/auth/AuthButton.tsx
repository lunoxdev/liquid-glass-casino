'use client';

import { supabase, useUserSession } from '../../lib/supabaseClient';
import Image from 'next/image';
import { useCallback, useState } from 'react';

export default function AuthButton() {
    const { session, loading } = useUserSession();
    const [showLogout, setShowLogout] = useState<boolean>(false);

    const handleLogin = useCallback(async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: { redirectTo: window.location.origin + '/' } // Home for now
            });
            if (error) throw error;
        } catch (err) {
            console.log("Error logging in")
        }
    }, []);

    const handleLogout = useCallback(async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
        } catch (err) {
            console.log("Error logging out")
        }
    }, []);

    if (loading) {
        return (
            <div className='flex items-center gap-4 relative h-14'>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16" className='animate-spin'><path fill="#cccccc" d="M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8" /></svg>
            </div>
        )
    }

    const avatarUrl = session?.user?.user_metadata?.avatar_url || session?.user?.user_metadata?.picture;
    const displayAvatar = avatarUrl || '/default-avatar.png';

    return (
        <div className="flex items-center gap-4 relative h-14">
            {!session ? (
                <button
                    onClick={handleLogin}
                    className="rounded-full border-2 border-gray-600 transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer focus:scale-100"
                >
                    <Image src="/google.svg" alt="Google Logo" width={36} height={36} />
                </button>
            ) : (
                <div className="relative">
                    {avatarUrl && (
                        <Image
                            src={displayAvatar}
                            alt="Avatar"
                            width={40}
                            height={40}
                            className="rounded-full border-2 border-gray-600 shadow-md transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                            onClick={() => setShowLogout(!showLogout)}
                        />
                    )}
                    {showLogout && (
                        <div className="absolute top-1/2 -translate-y-1/2 right-[calc(100%+theme('spacing.2'))] w-32 py-1 z-10">
                            <button
                                onClick={handleLogout}
                                className="block w-full font-bold text-center px-4 py-2 text-sm rounded-full transition duration-300 bg-gradient-to-l from-red-800 via-red-700 to-red-800 cursor-pointer hover:brightness-125"
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
