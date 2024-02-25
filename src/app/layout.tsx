import type { Metadata } from "next";
import { Inter, Architects_Daughter, Poiret_One } from "next/font/google";
import "./css/styles.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poiret_one = Poiret_One({
  subsets: ["latin"],
  variable: "--font-poiret-one",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "dreamjob?",
  description: "dreamjob!",
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poiret_one.variable} font-inter antialiased bg-black text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  );
}
