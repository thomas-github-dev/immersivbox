import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Immersive Box",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.variable + " " + roboto.variable}>
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
