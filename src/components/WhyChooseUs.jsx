import React from 'react';
import { ShieldCheck, Hammer, Lightbulb, Ruler } from 'lucide-react';

const benefits = [
  { icon: ShieldCheck, title: 'Safety', desc: 'Multi-layered protection, emergency brakes, and real-time monitoring.' },
  { icon: Hammer, title: 'Durability', desc: 'Industrial-grade materials with corrosion-resistant finishes.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Energy-efficient drives, smart controls, and IoT readiness.' },
  { icon: Ruler, title: 'Custom Design', desc: 'Cabin sizes, finishes, and doors tailored to your architecture.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="w-full bg-neutral-950 py-24 text-neutral-200">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
          Why Choose Us
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/60 to-neutral-950/60 p-6">
              <div className="mb-3 inline-flex rounded-lg border border-white/10 bg-white/5 p-2 text-yellow-300 group-hover:text-yellow-400">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-white">{b.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
