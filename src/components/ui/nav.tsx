'use client';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 transition-all duration-300 ${
        scrolled
          ? 'bg-[#091340]/60 backdrop-blur-2xl border-b border-white/07 shadow-[0_8px_32px_rgba(0,0,0,.35),inset_0_1px_0_rgba(255,255,255,.10)]'
          : 'bg-[#091340]/95 border-b border-white/06'
      }`}
    >
      <a href="#" className="flex items-center gap-2 text-decoration-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo.webp" alt="ASPIRIA" className="h-6 brightness-0 invert" />
        <span className="font-bold text-lg text-white tracking-tight">ASPIRIA</span>
      </a>

      <ul className="hidden md:flex gap-6 list-none">
        {[['#servicios', 'Servicios'], ['#tecnologia', 'Tecnología'], ['#track', 'Experiencia']].map(([href, label]) => (
          <li key={href}>
            <a href={href} className="text-[13px] text-white/50 hover:text-white transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contacto"
        className="bg-teal text-navy-d text-[13px] font-semibold px-5 py-2 rounded-sm hover:bg-teal-l transition-colors"
      >
        Hablemos
      </a>
    </nav>
  );
}
