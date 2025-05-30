import Header from './components/Header';
import Footer from './components/Footer';
import HomeContent from './components/HomeContent';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Suspense fallback={<div>Loading products...</div>}>
        <HomeContent />
      </Suspense>
      <Footer />
    </main>
  );
}
