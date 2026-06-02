'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Smartphone, Monitor, CalendarDays, Map,
  Package, FileBarChart, type LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Smartphone, Monitor, CalendarDays, Map, Package, FileBarChart,
};

export interface EcoCard {
  num: string;
  icon: string;
  title: string;
  desc: string;
  accent: string;
}

interface FluidCardStackProps {
  cards: EcoCard[];
}

export default function FluidCardStack({ cards }: FluidCardStackProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const CARD_W = 280;
  const CARD_H = 180;
  const STACK_OFFSET = 12;       // px between stacked cards (collapsed)
  const SPREAD_GAP   = 300;      // px between cards (expanded)

  return (
    <div className="flex flex-col items-center gap-10">
      {/* Card deck */}
      <div
        className="relative cursor-pointer"
        style={{
          width: CARD_W,
          height: CARD_H + STACK_OFFSET * (cards.length - 1),
        }}
        onClick={() => { setExpanded((v) => !v); setActiveIndex(null); }}
      >
        {/* hint label */}
        <AnimatePresence>
          {!expanded && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[11px] text-white/35 whitespace-nowrap"
            >
              Clic para explorar los módulos
            </motion.div>
          )}
        </AnimatePresence>

        {cards.map((card, i) => {
          const Icon = ICON_MAP[card.icon];
          const isActive = activeIndex === i;
          const reverseI = cards.length - 1 - i;

          // Collapsed: stack with offset; Expanded: spread horizontally centered
          const totalWidth = (cards.length - 1) * SPREAD_GAP;
          const expandedX = i * SPREAD_GAP - totalWidth / 2;
          const collapsedX = 0;
          const expandedY = 0;
          const collapsedY = reverseI * STACK_OFFSET;

          return (
            <motion.div
              key={card.num}
              className="absolute top-0 left-0"
              initial={false}
              animate={{
                x: expanded ? expandedX : collapsedX,
                y: expanded ? expandedY : collapsedY,
                scale: isActive ? 1.04 : 1,
                zIndex: expanded ? i : reverseI,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 24,
                delay: expanded ? i * 0.04 : (cards.length - 1 - i) * 0.03,
              }}
              style={{ width: CARD_W, height: CARD_H }}
              onClick={(e) => {
                if (!expanded) return;
                e.stopPropagation();
                setActiveIndex(isActive ? null : i);
              }}
            >
              <div
                className={`w-full h-full rounded-2xl border transition-all duration-300 flex flex-col justify-between p-6 select-none ${
                  isActive ? 'border-white/25 shadow-2xl' : 'border-white/10'
                }`}
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, #162050 0%, #0D1B4B 100%)`
                    : `rgba(22, 32, 80, 0.95)`,
                  boxShadow: isActive
                    ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${card.accent}30`
                    : '0 8px 32px rgba(0,0,0,0.35)',
                }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${card.accent}18` }}
                  >
                    {Icon && <Icon size={18} strokeWidth={1.5} style={{ color: card.accent }} />}
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-[.16em] uppercase"
                    style={{ color: card.accent }}
                  >
                    {card.num}
                  </span>
                </div>

                <div>
                  <div className="text-sm font-semibold text-white mb-1">{card.title}</div>
                  <p className="text-[12px] font-light text-white/50 leading-relaxed">{card.desc}</p>
                </div>

                {/* accent bar bottom */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${card.accent}50, transparent)` }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* close hint */}
      <AnimatePresence>
        {expanded && (
          <motion.button
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-8 text-[11px] text-white/30 hover:text-white/60 transition-colors"
            onClick={() => { setExpanded(false); setActiveIndex(null); }}
          >
            ✕ Colapsar
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
