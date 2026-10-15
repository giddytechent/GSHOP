import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/component/widgets/header";
import Providers from "@/configs/providers";
import { Toaster } from "sonner";

const roboto = Roboto({
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800","900"],
  variable: "--font-roboto"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Gshop",
  description: "Created by Giddytech",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${poppins.variable}`}
    >
      <body>
        <Providers>
          <Header />
          {children}
          <Toaster richColors position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}
