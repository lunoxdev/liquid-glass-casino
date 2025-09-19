import { gamesData } from "../data/data";
import Image from "next/image";
import Link from "next/link";

const GamesGrid = () => {
    return (
        <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 group p-4">
            {gamesData.map((game) => (
                <Link
                    href={game.url}
                    key={game.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer group-hover:opacity-50 hover:!opacity-100"
                >
                    <Image
                        src={game.cover}
                        alt={game.name}
                        width={384} // Based on cover-384x505.webp
                        height={505} // Based on cover-384x505.webp
                        layout="responsive"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </Link>
            ))}
        </section>
    );
};

export default GamesGrid;
