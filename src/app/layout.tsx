import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { UserContextProvider } from "@/context/user-context";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "User Management",
  description: "User Management by Fabrizio Ossola",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <UserContextProvider>{children}</UserContextProvider>
      </body>
    </html>
  );
}
