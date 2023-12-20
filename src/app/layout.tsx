"use client";
import Providers from "@/lib/Providers";
// import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { StyleProvider } from "@ant-design/cssinjs";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

const inter = Playfair_Display({ subsets:['cyrillic'],weight:"500"});

// export const metadata: Metadata = {
//   title: "Next Js Starter",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyleProvider hashPriority="high">
      {/* <ErrorBoundary> */}

      <Providers>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </Providers>
      {/* </ErrorBoundary> */}
    </StyleProvider>
  );
}
