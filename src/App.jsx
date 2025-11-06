import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import GalleryContact from './components/GalleryContact';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Top nav */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-neutral-300 via-neutral-500 to-neutral-700" />
            <span className="font-semibold tracking-tight">Qeuto Lifts</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-neutral-300 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#why" className="hover:text-white">Why Us</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="rounded-md border border-yellow-400/30 bg-yellow-400 px-3 py-1.5 text-neutral-900">Get a Quote</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <GalleryContact />
      </main>

      <footer className="border-t border-white/10 bg-neutral-960 py-8 text-neutral-400">
        <div className="mx-auto max-w-7xl px-6 text-sm">
          <p>© {new Date().getFullYear()} Qeuto Lifts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
