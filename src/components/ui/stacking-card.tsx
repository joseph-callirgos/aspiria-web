'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';

export interface ServiceData {
  num: string;
  title: string;
  description: string;
  color: string;
  pills: string[];
  items: string[];
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
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: service.color,
          scale,
          top: `calc(-5vh + ${i * 28}px)`,
        }}
        className="relative flex flex-col w-[85%] max-w-4xl rounded-xl p-10 origin-top border border-white/10"
      >
        {/* number watermark */}
        <span className="absolute bottom-4 right-8 font-serif text-[120px] leading-none text-white/[0.04] select-none pointer-events-none">
          {service.num}
        </span>

        {/* eyebrow */}
        <span className="text-[10px] font-bold tracking-[.18em] uppercase text-teal mb-4">
          {service.num} · Servicio
        </span>

        <div className="flex gap-12 items-start">
          {/* left: title + description */}
          <div className="w-1/2">
            <h2 className="font-serif text-3xl font-normal text-white leading-tight mb-4">
              {service.title}
            </h2>
            <p className="text-sm font-light text-white/60 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {service.pills.map((pill) => (
                <span
                  key={pill}
                  className="text-[11px] font-bold text-teal bg-teal/10 border border-teal/20 px-3 py-1 rounded-full"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* right: item list */}
          <div className="w-1/2 border-l border-white/08 pl-12 flex flex-col gap-4">
            {service.items.map((item, idx) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-[10px] font-bold text-teal tracking-widest mt-0.5 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-light text-white/70 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface StackingCardsProps {
  services: ServiceData[];
}

export default function StackingCards({ services }: StackingCardsProps) {
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
