'use client';
import { GlassEffect, GlassFilter } from './liquid-glass';

export default function Nav() {
  return (
    <>
      <GlassFilter />
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <GlassEffect
          className="rounded-2xl pointer-events-auto w-full max-w-3xl"
          style={{
            background: 'rgba(9,19,64,0.45)',
          }}
        >
          <div className="flex items-center justify-between px-5 py-3 gap-6">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo.webp"
                alt="ASPIRIA"
                className="h-6 brightness-0 invert"
              />
            </a>

            {/* Links */}
            <nav className="hidden md:flex items-center gap-6">
              {[
                ['#servicios',  'Servicios'],
                ['#tecnologia', 'Tecnología'],
                ['#track',      'Experiencia'],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="text-[13px] font-normal text-white/55 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="#contacto"
              className="shrink-0 text-[13px] font-semibold bg-teal text-navy-d px-4 py-2 rounded-xl hover:bg-teal-l transition-colors"
            >
              Hablemos
            </a>

          </div>
        </GlassEffect>
      </header>
    </>
  );
}
