import AdSence from "@/components/shared/adsence";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import AuthProvider from "@/service/authProvider";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Genius Career Hub is the largest BD Job News portal in Bangladesh",
  description: "Genius Career Hub is the largest BD Job News portal in Bangladesh. Offering a vast range of BD Job News opportunities across various industries. Connect with top employers and find your dream job today",
  openGraph: {
    title: "Genius Career Hub is the largest BD Job News portal in Bangladesh",
    description: "Genius Career Hub is the largest BD Job News portal in Bangladesh. Offering a vast range of BD Job News opportunities across various industries. Connect with top employers and find your dream job today",
    url: '/',
    siteName: 'Genius Career Hub',
    images: [
      {
        url: 'https://res.cloudinary.com/dgulbqzp8/image/upload/v1726388509/genius-career-hub/assets/aabr38fiiylqutbdpckb.png',
        width: 1200,
        height: 630,
        alt: 'Genius Career Hub'
      }
    ],
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <head>
          <AdSence pid={'ca-pub-1838079063396183'} />
        </head>
        <body className={`${inter.className} flex flex-col justify-between min-h-screen`}>
          <div>
            <Header />
            {children}
          </div>
          <Footer />
        </body>
        <GoogleAnalytics gaId="G-9DNTB5K954" />
      </AuthProvider>
    </html>
  );
}
