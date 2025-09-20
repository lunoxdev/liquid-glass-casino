"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const GamePlayPageContent = () => {
    const searchParams = useSearchParams();
    const gameUrl = searchParams.get("url");

    if (!gameUrl) {
        return (
            <div className="flex h-screen items-center justify-center bg-black text-white">
                No game URL provided.
            </div>
        );
    }

    return (
        <div className="h-screen w-screen overflow-hidden">
            <iframe
                src={gameUrl}
                title="Game"
                className="h-full w-full border-none"
                allowFullScreen
            />
        </div>
    );
};

const GamePlayPage = () => {
    return (
        <Suspense fallback={<div>Loading game...</div>}>
            <GamePlayPageContent />
        </Suspense>
    );
};

export default GamePlayPage;
