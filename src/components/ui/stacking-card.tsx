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
        className="relative w-[82%] max-w-3xl rounded-2xl p-10 origin-top border border-white/08 overflow-hidden"
      >
        {/* watermark number */}
        <span className="absolute -bottom-6 -right-4 font-serif text-[160px] leading-none select-none pointer-events-none text-white/[0.03]">
          {service.num}
        </span>

        {/* top row */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <span className="text-[10px] font-bold tracking-[.2em] uppercase mb-3 block" style={{ color: service.accent }}>
              {service.num} · Servicio
            </span>
            <h2 className="font-serif text-3xl font-normal text-white leading-tight">{service.title}</h2>
            <p className="text-sm font-light text-white/45 mt-2">{service.tagline}</p>
          </div>

          {/* pills */}
          <div className="flex flex-col gap-1.5 items-end shrink-0 ml-8 mt-1">
            {service.pills.map(p => (
              <span
                key={p}
                className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full border"
                style={{ color: service.accent, borderColor: `${service.accent}30`, backgroundColor: `${service.accent}10` }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* divider */}
        <div className="h-px bg-white/08 mb-8" />

        {/* icon grid */}
        <div className="grid grid-cols-4 gap-5">
          {service.items.map(({ icon, label }) => {
            const Icon = ICONS[icon];
            return (
              <div key={label} className="flex flex-col items-center gap-2.5 text-center">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${service.accent}15` }}
                >
                  {Icon && <Icon size={20} style={{ color: service.accent }} strokeWidth={1.5} />}
                </div>
                <span className="text-[11px] font-medium text-white/60 leading-tight">{label}</span>
              </div>
            );
          })}
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
    <ReactLenis root>
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
