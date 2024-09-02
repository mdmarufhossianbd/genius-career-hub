import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import AuthProvider from "@/service/AuthProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Genius Career Hub || The Largest Job Portal in Bangladesh.",
  description: "Genius Career Hub is the leading job portal in Bangladesh, offering a vast range of job opportunities across various industries. Connect with top employers and find your dream job today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <AuthProvider>
          <Header />
            {children}
          <Footer />
        </AuthProvider>
      </body>        
    </html>
  );
}
