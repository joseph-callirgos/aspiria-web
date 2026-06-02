'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';
import {
  Users2, Route, BarChart3, Handshake,
  Zap, GraduationCap, TrendingUp, MapPin,
  Package, Camera, Truck, LayoutTemplate,
  type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  Users2, Route, BarChart3, Handshake,
  Zap, GraduationCap, TrendingUp, MapPin,
  Package, Camera, Truck, LayoutTemplate,
};

export interface ServiceItem {
  icon: string;
  label: string;
}

export interface ServiceData {
  num: string;
  title: string;
  tagline: string;
  color: string;
  accent: string;
  pills: string[];
  items: ServiceItem[];
}

interface CardProps {
  i: number;
  service: ServiceData;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function Card({ i, service, progress, range, targetScale }: CardProps) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ backgroundColor: service.color, scale, top: `calc(-5vh + ${i * 28}px)` }}
        className="relative w-[72%] max-w-xl rounded-3xl overflow-hidden origin-top"
        // top accent line
      >
        {/* accent top border */}
        <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${service.accent}, ${service.accent}44, transparent)` }} />

        {/* watermark */}
        <span className="absolute top-4 right-6 font-serif text-[110px] leading-none select-none pointer-events-none text-white/[0.04]">
          {service.num}
        </span>

        <div className="p-8 pb-6">
          {/* eyebrow + pills */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-bold tracking-[.22em] uppercase" style={{ color: service.accent }}>
              {service.num} · Servicio
            </span>
            <div className="flex gap-1.5">
              {service.pills.map(p => (
                <span key={p} className="text-[10px] font-bold px-2.5 py-0.5 rounded-full border"
                  style={{ color: service.accent, borderColor: `${service.accent}35`, backgroundColor: `${service.accent}12` }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* title */}
          <h2 className="font-serif text-4xl font-normal text-white leading-[1.1] mb-2">
            {service.title}
          </h2>
          <p className="text-sm font-light text-white/40 mb-8">{service.tagline}</p>

          {/* divider */}
          <div className="h-px mb-8" style={{ background: `linear-gradient(90deg, ${service.accent}30, transparent)` }} />

          {/* icon row — 2 cols × 2 rows */}
          <div className="grid grid-cols-2 gap-4">
            {service.items.map(({ icon, label }) => {
              const Icon = ICONS[icon];
              return (
                <div key={label} className="flex items-center gap-4 rounded-xl p-4"
                  style={{ backgroundColor: `${service.accent}08`, border: `1px solid ${service.accent}15` }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${service.accent}18` }}>
                    {Icon && <Icon size={20} strokeWidth={1.5} style={{ color: service.accent }} />}
                  </div>
                  <span className="text-sm font-medium text-white/75">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function StackingCards({ services }: { services: ServiceData[] }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis>
      <div ref={container}>
        {services.map((service, i) => {
          const targetScale = 1 - (services.length - i) * 0.04;
          return (
            <Card
              key={service.num}
              i={i}
              service={service}
              progress={scrollYProgress}
              range={[i / services.length, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </ReactLenis>
  );
}
