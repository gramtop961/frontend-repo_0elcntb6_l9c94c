import React from 'react';
import { Users, Package, Home, Droplet, Truck } from 'lucide-react';

const items = [
  { icon: Users, title: 'Passenger Lifts', desc: 'Silent, smooth, and efficient for commercial and residential buildings.' },
  { icon: Truck, title: 'Goods Lifts', desc: 'Heavy-duty solutions for factories, warehouses, and logistics hubs.' },
  { icon: Home, title: 'Home Lifts', desc: 'Compact and elegant lifts for multi-level homes and villas.' },
  { icon: Droplet, title: 'Hydraulic Lifts', desc: 'Powerful vertical motion with robust hydraulic systems.' },
  { icon: Package, title: 'Machine Room-Less', desc: 'Space-saving MRL designs with high energy efficiency.' },
  { icon: Users, title: 'Panoramic Lifts', desc: 'Glass cabins with 360° views for premium spaces and malls.' },
];

export default function Products() {
  return (
    <section id="products" className="w-full bg-neutral-960 py-24 text-neutral-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
              Products & Services
            </h2>
            <p className="mt-2 text-neutral-400">From elegant passenger elevators to rugged industrial hoists.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/70 to-neutral-950/70 p-6 transition hover:border-white/20">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-sky-300 group-hover:text-sky-400">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-white">{it.title}</h3>
              </div>
              <p className="text-sm text-neutral-400">{it.desc}</p>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky-400/10 blur-2xl" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
