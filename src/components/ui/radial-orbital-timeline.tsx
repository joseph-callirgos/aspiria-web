"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap, Search, FileText, BarChart3, Users, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ICON_MAP: Record<string, LucideIcon> = {
  Search, FileText, Zap, BarChart3, Users,
};

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: string;
  relatedIds: number[];
  status: "started" | "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      Object.keys(prev).forEach((k) => { newState[parseInt(k)] = false; });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const related = getRelatedItems(id);
        const pulse: Record<number, boolean> = {};
        related.forEach((r) => { pulse[r] = true; });
        setPulseEffect(pulse);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }
      return newState;
    });
  };

  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.7) % 360).toFixed(3)));
    }, 50);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const targetAngle = (nodeIndex / timelineData.length) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 210;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number) =>
    timelineData.find((i) => i.id === itemId)?.relatedIds ?? [];

  const isRelatedToActive = (itemId: number) => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]) => {
    if (status === "started")    return "text-teal bg-teal/10 border-teal/40";
    if (status === "completed")  return "text-white bg-black border-white";
    if (status === "in-progress") return "text-black bg-white border-black";
    return "text-white bg-black/40 border-white/50";
  };

  const getStatusLabel = (status: TimelineItem["status"]) => {
    if (status === "started")     return "INICIADO";
    if (status === "completed")   return "COMPLETADO";
    if (status === "in-progress") return "EN CURSO";
    return "PENDIENTE";
  };

  return (
    <div
      className="w-full h-[520px] flex items-center justify-center overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div
        className="relative w-full max-w-3xl h-full flex items-center justify-center"
        ref={orbitRef}
        style={{ perspective: "1000px" }}
      >
        {/* Center orb */}
        <div className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-teal via-blue-500 to-blue-700 animate-pulse flex items-center justify-center z-10">
          <div className="absolute w-18 h-18 rounded-full border border-white/20 animate-ping opacity-70" />
          <div className="absolute w-22 h-22 rounded-full border border-white/10 animate-ping opacity-50" style={{ animationDelay: "0.5s" }} />
          <div className="w-7 h-7 rounded-full bg-white/80 backdrop-blur-md" />
        </div>

        {/* Orbit ring */}
        <div className="absolute w-[440px] h-[440px] rounded-full border border-white/15" />

        {timelineData.map((item, index) => {
          const position = calculateNodePosition(index, timelineData.length);
          const isExpanded = expandedItems[item.id];
          const isRelated = isRelatedToActive(item.id);
          const isPulsing = pulseEffect[item.id];
          const Icon = ICON_MAP[item.icon];

          return (
            <div
              key={item.id}
              ref={(el) => { nodeRefs.current[item.id] = el; }}
              className="absolute transition-all duration-700 cursor-pointer"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                zIndex: isExpanded ? 200 : position.zIndex,
                opacity: isExpanded ? 1 : position.opacity,
              }}
              onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
            >
              {/* Pulse aura */}
              <div
                className={`absolute rounded-full ${isPulsing ? "animate-pulse" : ""}`}
                style={{
                  background: "radial-gradient(circle, rgba(0,196,170,0.2) 0%, rgba(0,196,170,0) 70%)",
                  width: `${item.energy * 0.4 + 40}px`,
                  height: `${item.energy * 0.4 + 40}px`,
                  left: `-${(item.energy * 0.4 + 40 - 40) / 2}px`,
                  top: `-${(item.energy * 0.4 + 40 - 40) / 2}px`,
                }}
              />

              {/* Node dot */}
              <div
                className={`
                  w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${isExpanded
                    ? "bg-teal text-navy-d border-teal scale-125"
                    : isRelated
                    ? "bg-white/50 text-black border-white animate-pulse"
                    : "bg-navy-c text-white border-teal/60"}
                `}
                style={!isExpanded && !isRelated ? {
                  boxShadow: '0 0 12px rgba(0,196,170,0.5), 0 0 32px rgba(0,196,170,0.25), 0 0 60px rgba(0,196,170,0.1)',
                } : isExpanded ? {
                  boxShadow: '0 0 20px rgba(0,196,170,0.7), 0 0 50px rgba(0,196,170,0.4)',
                } : {}}
              >
                {Icon && <Icon size={24} strokeWidth={1.5} />}
              </div>

              {/* Label */}
              <div className={`
                absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300
                ${isExpanded ? "text-teal scale-110" : "text-white/70"}
              `}>
                {item.title}
              </div>

              {/* Expanded card */}
              {isExpanded && (
                <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-60 bg-navy-d/95 backdrop-blur-lg border-white/20 shadow-xl text-white">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/40" />
                  <CardHeader className="pb-2 p-4">
                    <div className="flex justify-between items-center">
                      <Badge className={`px-2 text-[10px] ${getStatusStyles(item.status)}`}>
                        {getStatusLabel(item.status)}
                      </Badge>
                      <span className="text-[10px] font-mono text-white/40">{item.date}</span>
                    </div>
                    <CardTitle className="text-sm mt-2 text-white font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-white/70 px-4 pb-4 pt-0">
                    <p className="leading-relaxed">{item.content}</p>
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <div className="flex justify-between text-[10px] mb-1">
                        <span className="flex items-center gap-1"><Zap size={9} />Progreso</span>
                        <span className="font-mono">{item.energy}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal to-blue-500" style={{ width: `${item.energy}%` }} />
                      </div>
                    </div>
                    {item.relatedIds.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <div className="flex items-center gap-1 mb-2">
                          <Link size={9} className="text-white/50" />
                          <span className="text-[10px] uppercase tracking-wider text-white/50">Conectado con</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.relatedIds.map((relId) => {
                            const rel = timelineData.find((i) => i.id === relId);
                            return (
                              <Button
                                key={relId}
                                variant="outline"
                                size="sm"
                                className="h-6 px-2 text-[10px] rounded-sm border-white/20 bg-transparent hover:bg-white/10 text-white/70 hover:text-white"
                                onClick={(e) => { e.stopPropagation(); toggleItem(relId); }}
                              >
                                {rel?.title}<ArrowRight size={8} className="ml-1" />
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
