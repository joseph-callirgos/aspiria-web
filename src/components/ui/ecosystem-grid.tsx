'use client';

import HighlightCard from '@/components/highlight-card';
import {
  Smartphone, Monitor, CalendarDays,
  Map, Package, FileBarChart,
} from 'lucide-react';

const modules = [
  {
    num: '01',
    icon: <Smartphone size={28} strokeWidth={1.5} className="text-teal" />,
    title: 'App móvil',
    description: [
      'Progreso de base y cobertura por ejecutivo.',
      'Reporte desde el celular al cerrar cada visita.',
    ],
  },
  {
    num: '02',
    icon: <Monitor size={28} strokeWidth={1.5} className="text-teal" />,
    title: 'Dashboard',
    description: [
      'KPIs por programa, cobertura de PDVs.',
      'Rendimiento por KAM en tiempo real.',
    ],
  },
  {
    num: '03',
    icon: <CalendarDays size={28} strokeWidth={1.5} className="text-teal" />,
    title: 'Calendario',
    description: [
      'Planificación diaria de visitas.',
      'Reportadas en vivo por cada ejecutivo.',
    ],
  },
  {
    num: '04',
    icon: <Map size={28} strokeWidth={1.5} className="text-teal" />,
    title: 'Mapa',
    description: [
      'Visualización geográfica de rutas y PDVs.',
      'Zonas trabajadas por ejecutivo en campo.',
    ],
  },
  {
    num: '05',
    icon: <Package size={28} strokeWidth={1.5} className="text-teal" />,
    title: 'Kardex',
    description: [
      'Catálogo visual de material POP.',
      'Saldos, alertas e historial por PDV.',
    ],
  },
  {
    num: '06',
    icon: <FileBarChart size={28} strokeWidth={1.5} className="text-teal" />,
    title: 'Reportes',
    description: [
      'Exportación a Excel/PDF instantánea.',
      'Búsquedas por ejecutivo, KAM y programa.',
    ],
  },
];

export default function EcosystemGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {modules.map((mod) => (
        <HighlightCard
          key={mod.num}
          title={mod.title}
          description={mod.description}
          icon={mod.icon}
        />
      ))}
    </div>
  );
}
