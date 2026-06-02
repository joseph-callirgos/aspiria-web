'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';

export interface ServiceData {
  num: string;
  title: string;
  description: string;
  image: string;
  color: string;
  pills: string[];
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
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);
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
        className="relative flex flex-col w-[85%] max-w-4xl h-[460px] rounded-xl p-10 origin-top border border-white/10"
      >
        {/* number watermark */}
        <span className="absolute top-6 right-8 font-serif text-[110px] leading-none text-white/05 select-none pointer-events-none">
          {service.num}
        </span>

        {/* eyebrow */}
        <span className="text-[10px] font-bold tracking-[.18em] uppercase text-teal mb-3 relative z-10">
          {service.num} · Servicio
        </span>

        <h2 className="text-2xl font-semibold text-white leading-tight max-w-xs relative z-10 mb-6">
          {service.title}
        </h2>

        <div className="flex gap-10 h-full">
          {/* left: description + pills */}
          <div className="w-[38%] flex flex-col justify-between">
            <p className="text-sm font-light text-white/65 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
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

          {/* right: image */}
          <div className="relative w-[62%] h-full rounded-lg overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
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
