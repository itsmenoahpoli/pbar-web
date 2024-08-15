import type { Metadata } from "next";
import { Inter } from "next/font/google";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin Dashboard - Authorized access allowed only",
};

const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC<LayoutProps> = (props) => {
  return (
    <html lang="en">
      <body className={inter.className}>{props.children}</body>
    </html>
  );
};

export default RootLayout;
