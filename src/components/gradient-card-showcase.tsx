'use client';

import React from 'react';
import {
  Smartphone, Monitor, CalendarDays,
  Map, Package, FileBarChart,
} from 'lucide-react';

const modules = [
  {
    num: '01',
    title: 'App móvil',
    desc: 'Progreso de base, cobertura y cumplimiento por ejecutivo. Reporte desde el celular al cerrar cada visita.',
    icon: Smartphone,
    gradientFrom: '#00D4B4',
    gradientTo: '#2B80D4',
  },
  {
    num: '02',
    title: 'Dashboard',
    desc: 'KPIs por programa, cobertura de PDVs e incidencias. Rendimiento por KAM y ejecutivo en actualización en vivo.',
    icon: Monitor,
    gradientFrom: '#2B80D4',
    gradientTo: '#00C4AA',
  },
  {
    num: '03',
    title: 'Calendario',
    desc: 'Planificación diaria de visitas reportadas en tiempo real por cada ejecutivo en campo. Sin papel.',
    icon: CalendarDays,
    gradientFrom: '#00C4AA',
    gradientTo: '#00D4B4',
  },
  {
    num: '04',
    title: 'Mapa',
    desc: 'Visualización geográfica de rutas, PDVs y zonas trabajadas. Cobertura georreferenciada por ejecutivo.',
    icon: Map,
    gradientFrom: '#2B80D4',
    gradientTo: '#00D4B4',
  },
  {
    num: '05',
    title: 'Kardex',
    desc: 'Catálogo visual de material POP con saldos, alertas e historial por PDV. Control de inventario digital.',
    icon: Package,
    gradientFrom: '#00D4B4',
    gradientTo: '#2B80D4',
  },
  {
    num: '06',
    title: 'Reportes',
    desc: 'Búsquedas por ejecutivo, KAM, programa y distrito. Exportación a Excel/PDF instantánea.',
    icon: FileBarChart,
    gradientFrom: '#00C4AA',
    gradientTo: '#2B80D4',
  },
];

export default function GradientCardShowcase() {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap py-4">
        {modules.map(({ num, title, desc, icon: Icon, gradientFrom, gradientTo }) => (
          <div
            key={num}
            className="group relative w-[300px] h-[380px] m-[32px_24px] transition-all duration-500"
          >
            {/* Skewed gradient panel */}
            <span
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-xl transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-60px)]"
              style={{ background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})` }}
            />
            {/* Glow blur */}
            <span
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-xl transform skew-x-[15deg] blur-[28px] opacity-60 transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-60px)]"
              style={{ background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})` }}
            />

            {/* Animated blobs */}
            <span className="pointer-events-none absolute inset-0 z-10">
              <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-white/10 backdrop-blur-[10px] transition-all duration-300 animate-blob group-hover:top-[-40px] group-hover:left-[40px] group-hover:w-[80px] group-hover:h-[80px] group-hover:opacity-100" />
              <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-white/10 backdrop-blur-[10px] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-40px] group-hover:right-[40px] group-hover:w-[80px] group-hover:h-[80px] group-hover:opacity-100" />
            </span>

            {/* Content glass card */}
            <div className="relative z-20 left-0 h-full p-6 bg-white/[0.06] backdrop-blur-[12px] shadow-lg rounded-xl text-white transition-all duration-500 group-hover:left-[-20px] group-hover:py-8 flex flex-col justify-between border border-white/10">
              <div>
                {/* num + icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-bold tracking-[.2em] uppercase"
                    style={{ color: gradientFrom }}>
                    {num} · Módulo
                  </span>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${gradientFrom}20`, border: `1px solid ${gradientFrom}30` }}>
                    <Icon size={18} strokeWidth={1.5} style={{ color: gradientFrom }} />
                  </div>
                </div>

                <h2 className="text-2xl font-semibold mb-3 leading-tight">{title}</h2>
                <p className="text-sm font-light text-white/60 leading-relaxed">{desc}</p>
              </div>

              {/* bottom accent line */}
              <div className="h-0.5 rounded-full mt-6"
                style={{ background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo}, transparent)` }}
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(8px); }
          50% { transform: translateY(-8px); }
        }
        .animate-blob { animation: blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
      `}</style>
    </>
  );
}
