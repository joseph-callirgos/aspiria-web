import StackingCards, { type ServiceData } from '@/components/ui/stacking-card';
import Nav from '@/components/ui/nav';
import RadialOrbitalTimeline, { type TimelineItem } from '@/components/ui/radial-orbital-timeline';
import EcosystemGrid from '@/components/ui/ecosystem-grid';


const aspiriaPhases: TimelineItem[] = [
  {
    id: 1,
    title: 'Diagnóstico',
    date: 'Fase 01',
    content: 'Analizamos cuentas, PDVs y brechas de ejecución antes de proponer cualquier acción.',
    category: 'Diagnóstico',
    icon: 'Search',
    relatedIds: [2],
    status: 'started',
    energy: 25,
  },
  {
    id: 2,
    title: 'Planificación',
    date: 'Fase 02',
    content: 'Rutas, frecuencias, KPIs y protocolos de visita definidos antes del arranque.',
    category: 'Planificación',
    icon: 'FileText',
    relatedIds: [1, 3],
    status: 'in-progress',
    energy: 50,
  },
  {
    id: 3,
    title: 'Ejecución',
    date: 'Fase 03',
    content: 'Equipos KAM con protocolo, discurso y materiales. Cada visita documentada en tiempo real.',
    category: 'Ejecución',
    icon: 'Zap',
    relatedIds: [2, 4],
    status: 'in-progress',
    energy: 75,
  },
  {
    id: 4,
    title: 'Análisis',
    date: 'Fase 04',
    content: 'App, dashboard y reportes exportables. Foto, GPS y timestamp en cada cierre de visita.',
    category: 'Análisis',
    icon: 'BarChart3',
    relatedIds: [3],
    status: 'in-progress',
    energy: 100,
  },
];

const services: ServiceData[] = [
  {
    num: '01',
    title: 'Gestión de Alianzas y Cuentas Clave',
    tagline: 'Ejecutivo dedicado. Ruta programada. Resultados medibles.',
    color: '#162050',
    accent: '#00C4AA',
    pills: ['KAM', 'Afiliaciones', 'Convenios'],
    items: [
      { icon: 'Users2',    label: 'Equipo KAM' },
      { icon: 'Route',     label: 'Rutas programadas' },
      { icon: 'Handshake', label: 'Convenios activos' },
      { icon: 'BarChart3', label: 'Reportes periódicos' },
    ],
  },
  {
    num: '02',
    title: 'Impulso de Medios de Pago',
    tagline: 'Cada PDV, un embajador activo del producto financiero.',
    color: '#0D1B4B',
    accent: '#00D4B4',
    pills: ['Activación PDV', 'Conversión', 'Embajadores'],
    items: [
      { icon: 'Zap',           label: 'Activación PDV' },
      { icon: 'GraduationCap', label: 'Capacitación' },
      { icon: 'TrendingUp',    label: 'Conversión' },
      { icon: 'MapPin',        label: 'Cobertura nacional' },
    ],
  },
  {
    num: '03',
    title: 'Trade Marketing',
    tagline: 'Presencia de marca con auditoría fotográfica por visita.',
    color: '#091340',
    accent: '#2B80D4',
    pills: ['Señalización', 'Material POP', 'Auditoría'],
    items: [
      { icon: 'LayoutTemplate', label: 'Señalización' },
      { icon: 'Package',        label: 'Material POP' },
      { icon: 'Camera',         label: 'Auditoría visual' },
      { icon: 'Truck',          label: 'Distribución' },
    ],
  },
];

export default function Home() {
  return (
    <main className="bg-[#091340] text-white">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-screen overflow-hidden bg-[#091340]">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay muted loop playsInline
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        {/* overlay más suave, solo oscurece la parte inferior-izquierda */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#091340]/95 via-[#091340]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091340]/80 via-[#091340]/20 to-transparent" />

        {/* contenido anclado abajo-izquierda */}
        <div className="absolute bottom-12 left-0 z-10 px-12 max-w-2xl">
          <span className="text-[11px] font-bold tracking-[.18em] uppercase text-teal block mb-4">
            Alianzas Comerciales · B2B · Perú
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight mb-5 whitespace-nowrap">
            Ejecutamos, medimos<br />
            y <em className="text-teal-l italic">documentamos</em><br />
            tu operación comercial.
          </h1>
          <p className="text-base font-light text-white/55 max-w-md leading-relaxed mb-8">
            Gestión de alianzas, impulso de medios de pago y trade marketing
            con trazabilidad completa en campo.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#contacto" className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-l via-teal to-blue-m text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:opacity-90 transition-opacity">
              Solicitar propuesta
            </a>
            <a href="#servicios" className="inline-flex items-center gap-2 border border-white/20 text-white/75 font-medium text-sm px-7 py-3.5 rounded-sm hover:border-white/50 hover:text-white transition-all">
              Ver servicios →
            </a>
          </div>

        </div>
      </section>

      {/* ── EL PROBLEMA ── */}
      <section className="bg-off py-24">
        <div className="px-12">
          <div className="flex gap-16 items-start">

            {/* left: stat block */}
            <div className="w-[42%] shrink-0">
              <span className="text-[11px] font-bold tracking-[.18em] uppercase text-teal block mb-4">El problema</span>
              <div className="font-serif text-[clamp(72px,10vw,112px)] leading-[.9] bg-gradient-to-r from-teal-l via-teal to-blue-m bg-clip-text text-transparent mb-5">70%</div>
              <p className="text-lg font-medium text-navy leading-tight max-w-xs mb-6">
                de los acuerdos comerciales firmados nunca se ejecutan correctamente en el punto de venta.
              </p>
              <div className="h-0.5 w-11 bg-gradient-to-r from-teal-l to-blue-m mb-8" />
              <div className="flex gap-6">
                {[
                  { n: '+15', l: 'Años en canal financiero' },
                  { n: '4',   l: 'Sectores estratégicos' },
                  { n: '100%',l: 'Trazabilidad operativa' },
                  { n: 'Nac.',l: 'Cobertura en campo' },
                ].map(({ n, l }) => (
                  <div key={l}>
                    <div className="font-serif text-2xl leading-none bg-gradient-to-r from-teal-l via-teal to-blue-m bg-clip-text text-transparent">{n}</div>
                    <div className="text-[10px] font-light text-[#8896AA] mt-1 whitespace-nowrap">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* right: pain points stacked vertically */}
            <div className="flex-1 flex flex-col gap-5">
              {[
                { icon: '📍', title: 'Sin visibilidad de campo', desc: 'No se sabe qué ejecutivo visitó, cuándo ni qué encontró en el PDV.' },
                { icon: '📊', title: 'Sin métricas accionables', desc: 'Reportes manuales, tardíos y sin cruce entre cobertura y resultado.' },
                { icon: '🔄', title: 'Sin escalabilidad', desc: 'La ejecución depende de la persona, no del sistema.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-white border border-[#E2E8F2] rounded-lg p-6 flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-sm bg-[#F5F7FA] border border-[#E2E8F2] flex items-center justify-center text-base shrink-0">{icon}</div>
                  <div>
                    <strong className="block text-sm font-semibold text-navy mb-1">{title}</strong>
                    <span className="text-sm font-light text-[#4A5568] leading-relaxed">{desc}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICIOS — STACKING CARDS ── */}
      <section id="servicios" className="bg-[#060d28]">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-4 text-center">
          <span className="text-[11px] font-bold tracking-[.18em] uppercase text-teal block mb-4">Lo que hacemos</span>
          <h2 className="font-serif text-4xl font-normal text-white leading-tight">
            Tres servicios. Una <em className="italic text-teal">operación integrada.</em>
          </h2>
          <p className="text-base font-light text-white/50 mt-3">Desplázate para explorar cada servicio.</p>
        </div>
        <StackingCards services={services} />
      </section>

      {/* ── ECOSISTEMA ── */}
      <section id="ecosistema" className="bg-[#050d1f] py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[.18em] uppercase text-teal block mb-4">Ecosistema ASPIRIA</span>
            <h2 className="font-serif text-4xl font-normal text-white leading-tight">
              Tecnología que <em className="italic text-teal">cierra el ciclo</em><br />de la ejecución.
            </h2>
            <p className="text-base font-light text-white/40 mt-3">Seis módulos integrados. Todo conectado. Todo trazable.</p>
          </div>
          <EcosystemGrid />
        </div>
      </section>

      {/* ── POR QUÉ ASPIRIA ── */}
      <section id="tecnologia" className="bg-navy">
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-0">
          <span className="text-[11px] font-bold tracking-[.18em] uppercase text-white/40 block mb-4">Por qué ASPIRIA</span>
          <h2 className="font-serif text-4xl font-normal text-white leading-tight max-w-lg mb-3">
            Lo que no se mide,<br /><em className="italic text-teal-l">no se puede mejorar.</em>
          </h2>
          <p className="text-sm font-light text-white/50 max-w-sm leading-relaxed">
            Operamos con un modelo de cuatro fases. Haz clic en cada nodo para explorar.
          </p>
        </div>
        <RadialOrbitalTimeline timelineData={aspiriaPhases} />
      </section>

      {/* ── TRACK RECORD ── */}
      <section id="track" className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[.18em] uppercase text-teal block mb-4">Experiencia de equipo</span>
            <h2 className="font-serif text-4xl font-normal text-navy">
              Probado en campo.<br /><em className="italic text-teal">Medido en números.</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 rounded-sm overflow-hidden border border-[#E2E8F2] mb-12">
            {[
              { v: '+15', l: 'Años en canal financiero' },
              { v: '4', l: 'Sectores estratégicos' },
              { v: '100%', l: 'Trazabilidad garantizada' },
              { v: 'Nac.', l: 'Cobertura operativa' },
            ].map(({ v, l }) => (
              <div key={l} className="bg-white p-8 text-center border-r border-[#E2E8F2] last:border-r-0">
                <div className="font-serif text-4xl bg-gradient-to-r from-teal-l via-teal to-blue-m bg-clip-text text-transparent mb-2">{v}</div>
                <div className="text-[11px] font-semibold text-muted tracking-wider uppercase">{l}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { sector: 'Banca · Medios de pago', client: 'Pagos sin intereses BBVA', desc: 'Activación y conversión en PDV retail con equipo especializado en discurso financiero.' },
              { sector: 'Banca · Cuentas clave', client: 'Mundo Sueldo BBVA', desc: 'Gestión de afiliaciones, mantenimiento y crecimiento de cuentas nómina en canal.' },
              { sector: 'Banca · Digital', client: 'App / Web Beneficios BBVA', desc: 'Impulso de adopción digital y activación de beneficios en puntos de contacto físico.' },
              { sector: 'Banca · Fidelización', client: 'Puntos BBVA', desc: 'Capacitación en PDV y activación de programa de lealtad con seguimiento de adopción.' },
              { sector: 'Grupo BBVA · Financiamiento', client: 'PowerPay Grupo BBVA', desc: 'Cobertura nacional de PDVs, seguimiento comercial y reportería exportable por ejecutivo.' },
              { sector: 'Banca · Trade Marketing', client: 'Scotiabank', desc: 'Alianzas comerciales, señalización en canal y capacitación con trazabilidad documentada.' },
            ].map(({ sector, client, desc }) => (
              <div key={client} className="bg-off border border-[#E2E8F2] rounded-sm p-5">
                <span className="text-[10px] font-bold tracking-[.14em] uppercase text-muted block mb-2">{sector}</span>
                <span className="font-serif text-lg text-navy block mb-2">{client}</span>
                <p className="text-xs font-light text-[#4A5568] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORES ── */}
      <section className="bg-off py-14">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-[11px] font-bold tracking-[.18em] uppercase text-teal block mb-3">Sectores</span>
          <h2 className="font-serif text-2xl font-normal text-navy mb-8">Operamos donde el canal importa.</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {['🏦 Banca', '💳 Medios de Pago', '📡 Telecomunicaciones', '🛒 Consumo Masivo', '🏬 Retail'].map((s) => (
              <div key={s} className="flex items-center gap-2 border border-[#E2E8F2] rounded-sm px-5 py-3 text-sm font-semibold text-navy bg-white">{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contacto" className="bg-navy-d py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-teal/07 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-xl mx-auto px-6">
          <span className="text-[11px] font-bold tracking-[.18em] uppercase text-white/40 block mb-4">¿Listo para empezar?</span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-white leading-tight mb-4">
            Tu operación merece<br /><em className="italic text-teal-l">ser medida</em> correctamente.
          </h2>
          <p className="text-sm font-light text-white/50 leading-relaxed mb-10">
            Hablemos de tu canal, tus PDVs y tus objetivos comerciales.<br />
            En 48 horas tienes una propuesta en tu correo.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-14">
            <a href="mailto:luis.saenz@aspiriateam.com" className="bg-gradient-to-r from-teal-l via-teal to-blue-m text-white font-semibold text-sm px-7 py-3.5 rounded-sm hover:opacity-90 transition-opacity">
              Solicitar propuesta
            </a>
            <a href="https://wa.me/51937823606" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white/70 font-medium text-sm px-7 py-3.5 rounded-sm hover:border-white/50 hover:text-white transition-all">
              WhatsApp directo →
            </a>
          </div>
          <div className="border-t border-white/08 pt-10 flex flex-col gap-6">
            {[
              { name: 'Luis Sáenz', email: 'luis.saenz@aspiriateam.com', phone: '+51 937 823 606' },
              { name: 'Stefano Agurto', email: 'stefano.agurto@aspiriateam.com', phone: '+51 958 173 556' },
            ].map(({ name, email, phone }) => (
              <div key={name} className="flex gap-8 justify-center flex-wrap">
                <div className="text-center"><div className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-1">Socio</div><div className="text-sm font-semibold text-white/80">{name}</div></div>
                <div className="text-center"><div className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-1">Email</div><a href={`mailto:${email}`} className="text-sm text-white/70 hover:text-teal transition-colors">{email}</a></div>
                <div className="text-center"><div className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-1">Teléfono</div><a href={`tel:${phone.replace(/\s/g,'')}`} className="text-sm text-white/70 hover:text-teal transition-colors">{phone}</a></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#060d28] px-6 py-5 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.webp" alt="ASPIRIA" className="h-5 brightness-0 invert opacity-40" />
          <span className="text-sm font-bold text-white/40 tracking-tight">ASPIRIA</span>
        </div>
        <span className="text-[11px] text-white/20">© 2026 · Plataforma comercial B2B · Lima, Perú</span>
      </footer>
    </main>
  );
}
