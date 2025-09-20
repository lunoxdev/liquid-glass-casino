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
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16" className='animate-spin'><path fill="#cccccc" d="M8 0A8 8 0 0 0 .002 7.812C.094 4.033 2.968 1 6.5 1C10.09 1 13 4.134 13 8a1.5 1.5 0 0 0 3 0a8 8 0 0 0-8-8m0 16a8 8 0 0 0 7.998-7.812C15.906 11.967 13.032 15 9.5 15C5.91 15 3 11.866 3 8a1.5 1.5 0 0 0-3 0a8 8 0 0 0 8 8" /></svg>
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
                    className="rounded-full border-2 border-gray-600 hover:border-cyan-700 transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                >
                    <Image src="/google.svg" alt="Google Logo" width={40} height={40} />
                </button>
            ) : (
                <div className="relative">
                    {avatarUrl && (
                        <button className="relative h-12 w-12 overflow-hidden rounded-full p-0.5 hover:scale-110 hover:brightness-125 transform transition duration-300 ease-in-out cursor-pointer">
                            <span
                                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ad46ff_0%,#2b7fff_80%,#ad46ff_100%)]"
                            />
                            <Image
                                src={displayAvatar}
                                alt="Avatar"
                                width={40}
                                height={40}
                                className="relative w-full h-full rounded-full object-cover transform transition duration-300 ease-in-out cursor-pointer"
                                onClick={() => setShowLogout(!showLogout)}
                            />
                        </button>
                    )}
                    {showLogout && (
                        <button
                            onClick={handleLogout}
                            className="absolute top-1/2 -translate-y-1/2 right-[calc(100%+theme('spacing.2'))] w-32 py-1 z-10 bg-red-950 no-underline group cursor-pointer shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white hover:scale-105 hover:brightness-125 transform transition duration-300 ease-in-out">
                            <span className="absolute -top-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-400/5 via-red-400/90 to-red-400/0 transition-opacity duration-500" />
                            <div className="relative flex items-center z-10 rounded-full bg-zinc-950 py-0.5 px-6 ring-1 ring-white/10">
                                Cerrar sesión
                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-400/0 via-red-400/90 to-red-400/0 transition-opacity duration-500" />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}