import Hero from '@/components/Hero';
import Message from '@/components/Message';
import MealSection from '@/components/MealSection';
import MemoryLane from '@/components/MemoryLane';
import Interactive from '@/components/Interactive';
import WishTree from '@/components/WishTree';
import MusicPlayer from '@/components/MusicPlayer';
import Firework from '@/components/Firework';
import HeartButton from '@/components/HeartButton';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Firework />
      <MusicPlayer />
      
      <Hero />
      <Message />
      <MealSection />
      <MemoryLane />
      <Interactive />
      <WishTree />
      
      <footer className="py-8 text-center bg-gradient-to-t from-pink-100 to-transparent">
        <HeartButton />
        <p className="text-pink-600 mt-4 font-medium">
          Made with ❤️ by Alan for Unmui
        </p>
        <p className="text-pink-400 text-sm mt-2">
          © 2024 年初四 馬年飛躍
        </p>
      </footer>
    </main>
  );
}
