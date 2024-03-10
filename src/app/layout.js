import { Inter } from "next/font/google";
import styles from  "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Piyush Raj",
  description: "Portfolio of piyush raj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
        <Header></Header>
        {children}
        </div>
      </body>
    </html>
  );
}
