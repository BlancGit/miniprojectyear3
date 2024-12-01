// layout.tsx

import Header from '../components/head';  // Adjust the path based on your project structure
import Footer from '../components/foot';  // Adjust the path based on your project structure

export const metadata = {
  title: 'Imaginary Job Posting Platform',
  description: 'Find or post imaginary jobs inspired by anime!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
