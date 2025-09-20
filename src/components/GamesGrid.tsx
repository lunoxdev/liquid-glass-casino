"use client"

import { gamesData } from "../data/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import InputSpotlightBorder from "./ui/InputSpotlightBorder";

const GamesGrid = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredGames = gamesData.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    <Link
                        key={game.name}
                        href={`/gameplay?url=${encodeURIComponent(game.url)}`}
                        className="rounded-md shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer group-hover:opacity-50 hover:!opacity-100 relative"
                    >
                        <Image
                            src={game.cover}
                            alt={game.name}
                            className="rounded-t-lg"
                        />
                    </Link>
                ))}
            </section>
        </div>
    );
};

export default GamesGrid;
