'use client';

import { supabase, useUserSession } from '../../lib/supabaseClient';
import Image from 'next/image';
import { useCallback, useState } from 'react';

export default function AuthButton() {
    const { session, loading } = useUserSession();
    const [error, setError] = useState<string | null>(null);

    const handleLogin = useCallback(async () => {
        setError(null);
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: { redirectTo: window.location.origin + '/' } // Home for now
            });
            if (error) throw error;
        } catch (err: any) {
            setError(err.message);
        }
    }, []);

    const handleLogout = useCallback(async () => {
        setError(null);
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
        } catch (err: any) {
            setError(err.message);
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const avatarUrl = session?.user?.user_metadata?.avatar_url || session?.user?.user_metadata?.picture;
    const displayAvatar = avatarUrl || '/default-avatar.png';

    return (
        <div className="flex items-center gap-4">
            {error && <p className="text-red-500">Error: {error}</p>}
            {!session ? (
                <button
                    onClick={handleLogin}
                    className="px-4 py-2 font-bold bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Iniciar sesión con Google
                </button>
            ) : (
                <div className="flex items-center gap-3">
                    {avatarUrl && (
                        <Image
                            src={displayAvatar}
                            alt="Avatar"
                            width={32}
                            height={32}
                            className="rounded-full border-2 border-blue-500"
                        />
                    )}
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 font-bold bg-red-500 rounded hover:bg-red-600 transition"
                    >
                        Cerrar sesión
                    </button>
                </div>
            )}
        </div>
    );
}
