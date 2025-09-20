"use client"

import { gamesData } from "../data/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import InputSpotlightBorder from "./ui/InputSpotlightBorder";
import { useRouter } from "next/navigation";

const GamesGrid = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const router = useRouter();

    const filteredGames = gamesData.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleGameClick = (gameUrl: string) => {
        router.push(`/gameplay?url=${encodeURIComponent(gameUrl)}`);
    };

    return (
        <div className="relative">
            <div className="absolute -top-3 right-0 z-10 w-1/2 sm:w-1/3">
                <InputSpotlightBorder
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 group pt-14">
                {filteredGames.map((game) => (
                    <div
                        key={game.name}
                        onClick={() => handleGameClick(game.url)}
                        className="rounded-md shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer group-hover:opacity-50 hover:!opacity-100"
                    >
                        <Image
                            src={game.cover}
                            alt={game.name}
                            width={384}
                            height={505}
                            layout="responsive"
                            objectFit="cover"
                            className="rounded-t-lg"
                        />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default GamesGrid;
