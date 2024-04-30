import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import { FavoriteImagesProvider } from '@/store/favorite-images-context';
import { PropsWithChildren } from 'react';
import { BreedsListingsProvider } from '@/store/breeds-listings-context';
import '@/styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Doggo',
  description:
    'Doggo shows you the different dog breeds and images of different dogs from those breeds.',
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <BreedsListingsProvider>
          <FavoriteImagesProvider>
            <Header />
            <main>{children}</main>
          </FavoriteImagesProvider>
        </BreedsListingsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
