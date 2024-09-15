import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import AuthProvider from "@/service/authProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Genius Career Hub || The Largest Job Portal in Bangladesh.",
  description: "Genius Career Hub is the leading job portal in Bangladesh, offering a vast range of job opportunities across various industries. Connect with top employers and find your dream job today!",
  openGraph: {
    title: "Genius Career Hub || The Largest Job Portal in Bangladesh.",
    description: "Genius Career Hub is the leading job portal in Bangladesh, offering a vast range of job opportunities across various industries. Connect with top employers and find your dream job today!",
    url : 'https://genius-career-hub.vercel.app',
    siteName : 'Genius Career Hub',
    images : [
      {
        url : 'https://res.cloudinary.com/dgulbqzp8/image/upload/v1726388509/genius-career-hub/assets/aabr38fiiylqutbdpckb.png',
        width : 1200,
        height : 630,
        alt : 'Genius Career Hub'
      }
    ],
    type : 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${inter.className} flex flex-col justify-between min-h-screen`}>
          <div>
            <Header />
            {children}
          </div>
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
