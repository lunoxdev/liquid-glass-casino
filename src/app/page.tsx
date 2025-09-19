import NavBar from '../components/NavBar';
import { gamesData } from "../data/data";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

export default function Home() {
  return (
    <div className={clsx("font-sans max-w-4xl mx-auto")}>
      <NavBar />

      <main>
        <div className="divider-line animate-pulse brightness-150 my-2" />

        {/* Grid games */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 group p-4">
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
        </div>
      </main>
    </div>
  );
}
