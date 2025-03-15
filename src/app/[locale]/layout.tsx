import type { Metadata } from 'next';
import '../globals.css';
import { Noto_Sans_JP } from 'next/font/google';
import { getDictionary } from '@/i18n';
import { LangProvider } from '@/contexts/LangContext';
import { Langs } from '@/i18n/config';

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  preload: false,
  variable: '--font-noto-sans-jp',
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

export const metadata: Metadata = {
  title: {
    template: '%s - Portfolio',
    default: 'Portfolio',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: Langs };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const dict = await getDictionary(params.locale);

  return (
    <html lang={params.locale}>
      <body className={`${notoSansJp.className} antialiased`}>
        <LangProvider dict={dict}>{children}</LangProvider>
      </body>
    </html>
  );
}
