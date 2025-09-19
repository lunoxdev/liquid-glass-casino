import NavBar from '../components/NavBar';
import clsx from "clsx";
import GamesGrid from '@/components/GamesGrid';

export default function Home() {
  return (
    <div className={clsx("font-sans max-w-4xl mx-auto")}>
      <NavBar />

      <main>
        <div className="divider-line animate-pulse brightness-150 my-2" />

        {/* Grid games */}
        <GamesGrid />
      </main>
    </div>
  );
}
