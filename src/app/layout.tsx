import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'NexaCart | Premium Commerce Platform',
    template: '%s | NexaCart',
  },
  description:
    'A premium commerce platform foundation built for scalable, modern retail experiences.',
  keywords: ['ecommerce', 'commerce platform', 'next.js', 'modern retail'],
  metadataBase: new URL('https://nexacart.example'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NexaCart',
    description: 'A premium commerce platform foundation built for scalable, modern retail experiences.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-background text-foreground antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
