import './globals.css';
import LayoutBackground from '/components/header/main-header.jsx';

export const metadata = {
  title: 'NextFood',
  description: 'Les repas préférés de la communauté.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <LayoutBackground></LayoutBackground>
        {children}
      </body>
    </html>
  );
}
