import clsx from "clsx";
import AuthButton from '../components/auth/AuthButton';

export default function Home() {
  return (
    <main className={clsx("font-sans")}>
      <AuthButton />
    </main>
  );
}
