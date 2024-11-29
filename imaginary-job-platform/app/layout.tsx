import Header from '@/components/head';
import Footer from '@/components/foot';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Imaginary Job Posting Platform</title>
        <meta name="description" content="Find creative and impossible jobs inspired by anime and manga." />
      </head>
      <body className="">
        <Header />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
