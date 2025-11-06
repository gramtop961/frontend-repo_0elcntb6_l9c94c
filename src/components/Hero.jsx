import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-neutral-950 text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-neutral-900/40 to-neutral-950/90" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-sm/none text-neutral-200">Precision Engineered Vertical Mobility</span>
        </div>

        <h1 className="mx-auto max-w-4xl bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Qeuto Lifts
          <span className="block text-xl font-normal text-neutral-300 sm:text-2xl md:text-3xl">Industrial-grade elevators for modern spaces</span>
        </h1>

        {/* Elevator visual centerpiece */}
        <div className="relative mt-12 h-72 w-56 sm:h-[22rem] sm:w-72">
          {/* Shaft */}
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-800/60 to-neutral-900/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm" />
          {/* Moving cab placeholder (static now; will animate with GSAP later) */}
          <div className="absolute left-1/2 top-6 w-[72%] -translate-x-1/2 rounded-xl border border-white/15 bg-gradient-to-br from-neutral-300 to-neutral-100 p-[2px] shadow-xl">
            <div className="rounded-[10px] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-3">
              {/* Door */}
              <div className="grid grid-cols-2 gap-1 rounded-md bg-gradient-to-b from-neutral-700 to-neutral-900 p-2 shadow-inner">
                <div className="h-28 rounded-sm bg-gradient-to-b from-neutral-300/60 via-neutral-500/50 to-neutral-700/60 shadow-inner" />
                <div className="h-28 rounded-sm bg-gradient-to-b from-neutral-300/60 via-neutral-500/50 to-neutral-700/60 shadow-inner" />
              </div>
              {/* Panel */}
              <div className="mt-3 flex items-center justify-between rounded-md border border-white/10 bg-neutral-900/60 px-2 py-1">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  <span className="h-2 w-2 rounded-full bg-yellow-300/80" />
                </div>
                <div className="h-1.5 w-16 rounded bg-neutral-700" />
              </div>
            </div>
          </div>
          {/* Reflection */}
          <div className="pointer-events-none absolute inset-x-6 top-0 h-24 rounded-b-full bg-white/10 blur-2xl" />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-yellow-400/30 bg-gradient-to-b from-yellow-400 to-amber-300 px-6 py-3 text-neutral-900 shadow-[0_10px_30px_-10px_rgba(251,191,36,0.5)] transition hover:from-yellow-300 hover:to-amber-200"
          >
            Get a Quote
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-sm transition hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom fade for transition to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-neutral-950" />
    </section>
  );
}
