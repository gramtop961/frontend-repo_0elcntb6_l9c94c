import React from 'react';

const gallery = [
  { src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop', alt: 'Corporate lobby lift' },
  { src: 'https://images.unsplash.com/photo-1699197994777-75d67c2349be?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3Jwb3JhdGUlMjBsb2JieSUyMGxpZnR8ZW58MHwwfHx8MTc2MjQxMTUxNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Industrial goods lift' },
  { src: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1200&auto=format&fit=crop', alt: 'Residential home lift' },
  { src: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop', alt: 'Glass panoramic lift' },
];

export default function GalleryContact() {
  return (
    <section id="projects" className="w-full bg-neutral-960 py-24 text-neutral-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
            Client Projects
          </h2>
          <a href="#contact" className="hidden rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-sm hover:bg-white/10 sm:inline-block">Work with us</a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {gallery.map((g) => (
            <figure key={g.src} className="group relative overflow-hidden rounded-xl">
              <img src={g.src} alt={g.alt} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
            </figure>
          ))}
        </div>
      </div>

      <div id="contact" className="mx-auto mt-24 max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
              Contact Qeuto Lifts
            </h3>
            <p className="mt-2 text-neutral-400">Tell us about your project. Our engineers will propose the optimal lift configuration and timeline.</p>

            <div className="mt-6 space-y-3 text-neutral-300">
              <p><span className="font-medium text-white">Email:</span> hello@qeutolifts.com</p>
              <p><span className="font-medium text-white">Phone:</span> +1 (555) 012-3456</p>
              <p><span className="font-medium text-white">Address:</span> 450 Industrial Way, Unit 9, Tech Park</p>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/60 to-neutral-950/60 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-neutral-300">Name</label>
                <input required type="text" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" placeholder="Jane Doe" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-neutral-300">Company</label>
                <input type="text" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" placeholder="Acme Corp" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-neutral-300">Email</label>
                <input required type="email" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-neutral-300">Phone</label>
                <input type="tel" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" placeholder="+1 555 000 0000" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-neutral-300">Project Details</label>
                <textarea rows={4} className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" placeholder="Building type, floors, capacity, timelines..." />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-neutral-500">By submitting, you agree to our privacy policy.</p>
              <button className="rounded-lg border border-yellow-400/30 bg-gradient-to-b from-yellow-400 to-amber-300 px-5 py-2.5 text-neutral-900 shadow-[0_10px_30px_-10px_rgba(251,191,36,0.5)] transition hover:from-yellow-300 hover:to-amber-200">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
