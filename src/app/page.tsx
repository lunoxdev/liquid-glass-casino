import NavBar from '../components/NavBar';
import clsx from "clsx";
import GamesGrid from '@/components/GamesGrid';
import RewardSystem from '../components/RewardSystem';
import AudioPlayer from '../components/audio/AudioPlayer';

export default function Home() {
  return (
    <div className={clsx("font-sans max-w-4xl mx-auto")}>
      <AudioPlayer />
      <NavBar />

      <main className='p-3'>
        <RewardSystem />

        {/* <div className="divider-line animate-pulse brightness-150 my-2" /> */}

        {/* Grid games */}
        <GamesGrid />
      </main>
    </div>
  );
}
