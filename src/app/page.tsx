import StackingCards, { type ServiceData } from '@/components/ui/stacking-card';
import Nav from '@/components/ui/nav';

const services: ServiceData[] = [
  {
    num: '01',
    title: 'Gestión de Alianzas y Cuentas Clave',
    description:
      'Afiliamos, mantenemos y hacemos crecer cuentas estratégicas. Gestionamos campañas de beneficios y convenios con modelo KAM: ejecutivo dedicado, ruta programada y reporte periódico de desempeño.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80',
    color: '#162050',
    pills: ['KAM', 'Afiliaciones', 'Campañas', 'Convenios'],
  },
  {
    num: '02',
    title: 'Impulso de Medios de Pago',
    description:
      'Convertimos cada punto de venta en un embajador activo del producto financiero. Activación, seguimiento comercial y capacitación continua con equipo especializado en discurso de medios de pago.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80',
    color: '#0D1B4B',
    pills: ['Activación PDV', 'Conversión', 'Embajadores'],
  },
  {
    num: '03',
    title: 'Trade Marketing',
    description:
      'Implementamos y auditamos la presencia de marca en canal. Gestión integral de señalización, material POP y capacitación en PDV, con validación fotográfica y trazabilidad completa por visita.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&auto=format&fit=crop&q=80',
    color: '#091340',
    pills: ['Señalización', 'Material POP', 'Validación'],
  },
];

export default function Home() {
  return (
    <main className="bg-[#091340] text-white">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center overflow-hidden bg-[#091340]">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          autoPlay muted loop playsInline
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#091340]/90 via-[#091340]/65 to-[#091340]/30" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16">
          <span className="text-[11px] font-bold tracking-[.18em] uppercase text-teal block mb-5">
            Alianzas Comerciales · B2B · Perú
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight max-w-2xl mb-6">
            Ejecutamos, medimos<br />
            y <em className="text-teal-l italic">documentamos</em><br />
            tu operación comercial.
          </h1>
          <p className="text-lg font-light text-white/60 max-w-lg leading-relaxed mb-10">
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

          <div className="flex gap-10 flex-wrap mt-16 pt-10 border-t border-white/08">
            {[
              { n: '+15', l: 'Años en canal financiero' },
              { n: '4', l: 'Sectores estratégicos' },
              { n: '100%', l: 'Trazabilidad operativa' },
              { n: 'Nac.', l: 'Cobertura en campo' },
            ].map(({ n, l }) => (
              <div key={l}>
                <div className="font-serif text-4xl leading-none bg-gradient-to-r from-teal-l via-teal to-blue-m bg-clip-text text-transparent">{n}</div>
                <div className="text-xs font-light text-white/40 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EL PROBLEMA ── */}
      <section className="bg-off py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[11px] font-bold tracking-[.18em] uppercase text-teal block mb-4">El problema</span>
              <div className="font-serif text-[clamp(72px,12vw,120px)] leading-[.9] bg-gradient-to-r from-teal-l via-teal to-blue-m bg-clip-text text-transparent mb-4">70%</div>
              <p className="text-lg font-medium text-navy leading-tight max-w-xs mb-4">
                de los acuerdos comerciales firmados nunca se ejecutan correctamente en el punto de venta.
              </p>
              <div className="h-0.5 w-11 bg-gradient-to-r from-teal-l to-blue-m" />
            </div>
            <ul className="flex flex-col gap-5">
              {[
                { icon: '📍', title: 'Sin visibilidad de campo', desc: 'No se sabe qué ejecutivo visitó, cuándo ni qué encontró en el PDV.' },
                { icon: '📊', title: 'Sin métricas accionables', desc: 'Reportes manuales, tardíos y sin cruce entre cobertura y resultado.' },
                { icon: '🔄', title: 'Sin escalabilidad', desc: 'La ejecución depende de la persona, no del sistema.' },
              ].map(({ icon, title, desc }) => (
                <li key={title} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-sm bg-white border border-[#E2E8F2] flex items-center justify-center shrink-0 text-base">{icon}</div>
                  <div>
                    <strong className="block text-sm font-semibold text-navy mb-0.5">{title}</strong>
                    <span className="text-sm font-light text-[#4A5568]">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
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
      <section className="bg-off py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[.18em] uppercase text-teal block mb-4">Ecosistema ASPIRIA</span>
            <h2 className="font-serif text-4xl font-normal text-navy leading-tight">
              Tecnología que <em className="italic text-teal">cierra el ciclo</em><br />de la ejecución.
            </h2>
            <p className="text-base font-light text-[#4A5568] mt-3">Seis módulos integrados. Todo conectado. Todo trazable.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { ico: '📱', num: '01 · App móvil', title: 'Campo en tiempo real', desc: 'Progreso de base, cobertura y cumplimiento por ejecutivo.' },
              { ico: '🖥️', num: '02 · Dashboard', title: 'Visibilidad ejecutiva', desc: 'KPIs por programa, cobertura de PDVs y rendimiento por KAM.' },
              { ico: '📅', num: '03 · Calendario', title: 'Rutas sincronizadas', desc: 'Planificación diaria de visitas reportadas en vivo.' },
              { ico: '🗺️', num: '04 · Mapa', title: 'Cobertura georreferenciada', desc: 'Visualización geográfica de rutas y zonas trabajadas.' },
              { ico: '📦', num: '05 · Kardex', title: 'Control de materiales', desc: 'Catálogo visual de material POP con saldos y alertas.' },
              { ico: '📋', num: '06 · Reportes', title: 'Exportables en un clic', desc: 'Búsquedas por ejecutivo, KAM, programa y distrito.' },
            ].map(({ ico, num, title, desc }) => (
              <div key={num} className="bg-white border border-[#E2E8F2] rounded-sm p-6">
                <span className="text-2xl block mb-3">{ico}</span>
                <span className="text-[10px] font-bold tracking-[.14em] text-teal uppercase block mb-3">{num}</span>
                <div className="text-sm font-bold text-navy mb-1.5">{title}</div>
                <p className="text-xs font-light text-[#4A5568] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ ASPIRIA ── */}
      <section id="tecnologia" className="bg-navy py-24">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-[11px] font-bold tracking-[.18em] uppercase text-white/40 block mb-4">Por qué ASPIRIA</span>
          <h2 className="font-serif text-4xl font-normal text-white leading-tight max-w-lg mb-3">
            Lo que no se mide,<br /><em className="italic text-teal-l">no se puede mejorar.</em>
          </h2>
          <p className="text-sm font-light text-white/50 max-w-sm mb-10 leading-relaxed">
            Operamos con un modelo de cuatro fases que convierte cada acuerdo comercial en resultados verificables.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 rounded-sm overflow-hidden border border-white/06 mb-9">
            {[
              { num: '01 · Diagnóstico', title: 'Mapeamos la realidad', desc: 'Analizamos cuentas, PDVs y brechas antes de proponer cualquier acción.' },
              { num: '02 · Planificación', title: 'Diseñamos el modelo', desc: 'Rutas, frecuencias, KPIs y protocolos definidos antes del arranque.' },
              { num: '03 · Ejecución', title: 'Actuamos en campo', desc: 'Equipos KAM con protocolo, discurso y materiales. Cada visita documentada.' },
              { num: '04 · Tecnología', title: 'Medimos y trazamos', desc: 'App, dashboard y reportes exportables. Foto, GPS y timestamp por visita.' },
            ].map(({ num, title, desc }) => (
              <div key={num} className="bg-navy-c p-6 border-r border-white/05 last:border-r-0">
                <span className="text-[10px] font-bold tracking-[.18em] text-teal uppercase block mb-3">{num}</span>
                <div className="text-sm font-bold text-white mb-2">{title}</div>
                <p className="text-xs font-light text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { ico: '👁️', title: 'Sin caja negra', desc: 'Visibilidad completa de la operación. Sin esperar el reporte del lunes.' },
              { ico: '📋', title: 'Trazabilidad auditable', desc: 'Foto, GPS y timestamp por visita. Cada acuerdo ejecutado queda documentado.' },
              { ico: '📊', title: 'Reportes accionables', desc: 'Cruzamos cobertura, KAM y resultado. Decidir con datos, no con intuición.' },
            ].map(({ ico, title, desc }) => (
              <div key={title} className="border border-white/08 rounded-sm p-5 flex gap-4 items-start">
                <div className="w-8 h-8 rounded-sm bg-teal/10 flex items-center justify-center shrink-0 text-sm">{ico}</div>
                <div>
                  <div className="text-sm font-bold text-white mb-1">{title}</div>
                  <p className="text-xs font-light text-white/40 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
