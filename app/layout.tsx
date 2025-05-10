import './globals.css';

export const metadata = {
  title: "Les bonnes pratiques d'écoconception | Collectif Green IT",
  description: "Les bonnes pratiques d'écoconception pour Performance Web",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
