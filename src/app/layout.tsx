import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ASPIRIA — Plataforma Comercial B2B',
  description: 'Gestión de alianzas, impulso de medios de pago y trade marketing con trazabilidad completa en campo.',
  openGraph: {
    title: 'ASPIRIA — Plataforma Comercial B2B',
    description: 'Ejecutamos, medimos y documentamos tu operación comercial.',
    url: 'https://aspiria-web.vercel.app',
    siteName: 'ASPIRIA',
    locale: 'es_PE',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
