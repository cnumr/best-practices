import Header from '../../components/header';
import { ui } from '../../i18n/ui';
import { Inter } from 'next/font/google';
import Footer from '../../components/footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Les bonnes pratiques d'écoconception | Collectif Green IT",
  description: "Les bonnes pratiques d'écoconception pour Performance Web",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: keyof typeof ui;
  };
}) {
  return (
    <>
      <html lang={params.lang}>
        <body className={inter.className}>
          <Header lang={params.lang} />
          {children}
          <Footer lang={params.lang} />
        </body>
      </html>
    </>
  );
}
