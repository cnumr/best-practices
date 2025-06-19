import { HomePage } from '../components/pages/home-page';
import { client } from '../tina/__generated__/databaseClient';
import Header from '../components/header';
import { Inter } from 'next/font/google';
import Footer from '../components/footer';
import GlobalSearch from '../components/search/global-search';
const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const res = await client.queries.home({ relativePath: 'fr.mdx' });

  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <GlobalSearch/>
        <HomePage
          // https://github.com/vercel/next.js/issues/47447
          data={JSON.parse(JSON.stringify(res.data))}
          query={res.query}
          variables={res.variables}
        />
        <Footer />
      </body>
    </html>
  );
}
