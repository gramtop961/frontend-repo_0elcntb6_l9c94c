import React from 'react';
import { Shield, Wrench, Cog, Ribbon } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-neutral-950 py-24 text-neutral-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <h2 className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
              About Qeuto Lifts
            </h2>
            <p className="mt-4 max-w-prose text-neutral-300">
              Qeuto Lifts engineers premium elevators and lift systems for commercial, residential, and industrial applications.
              Our solutions blend mechanical precision with contemporary aesthetics — delivering safe, smooth, and reliable vertical mobility.
            </p>
            <p className="mt-3 max-w-prose text-neutral-400">
              Built with aerospace-grade components and rigorous quality control, our lifts are designed for longevity and effortless maintenance.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-4 sm:gap-6">
            <Feature icon={Shield} title="Safety First" desc="Compliant with global safety standards and redundant protection systems." />
            <Feature icon={Wrench} title="Low Maintenance" desc="Modular parts and predictive diagnostics minimize downtime." />
            <Feature icon={Cog} title="Precision" desc="High-tolerance engineering for ultra-smooth operation." />
            <Feature icon={Ribbon} title="Premium Finish" desc="Metallic textures and custom finishes to match your space." />
          </ul>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <li className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/60 to-neutral-950/60 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="flex items-start gap-3">
        <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-emerald-300 group-hover:text-emerald-400">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-medium text-white">{title}</h3>
          <p className="mt-1 text-sm text-neutral-400">{desc}</p>
        </div>
      </div>
    </li>
  );
}
