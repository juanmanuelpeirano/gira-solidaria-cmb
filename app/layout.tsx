import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gira Solidaria 2026 | Creciendo Juntos',
  description: 'Colaborá con la Gira Solidaria 2026 de Creciendo Juntos, Club Manuel Belgrano. M16 Rugby y 6ta Hockey viajan a El Refugio, Chajarí.',
  applicationName: 'Gira Solidaria 2026',
  openGraph: {
    title: 'Gira Solidaria 2026 | Creciendo Juntos',
    description: 'M16 Rugby y 6ta Hockey viajan a Chajarí para compartir y llevar donaciones a El Refugio.',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gira Solidaria 2026 | Creciendo Juntos',
    description: 'Una iniciativa de Creciendo Juntos y Club Manuel Belgrano.',
  },
};

export const viewport: Viewport = {
  themeColor: '#071635',
  colorScheme: 'dark light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
