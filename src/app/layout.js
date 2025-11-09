import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Website bán hàng áo thun",
  description: "Cung cấp các áo thun nam, áo thu nữ, áo thun trẻ em với nhiều mẫu mã",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="header">
          LetDiv
        </header>
        <main className="main-content">
          {children}
        </main>
        <footer className="footer">
          @2025 LetDiv Copyright
        </footer>
      </body>
    </html>
  );
}
