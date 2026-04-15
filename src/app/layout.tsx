import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Roboto } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Aiden Tech Solutions | Scalable Software & AI',
  description: 'Professional software development, AI integration, and cloud strategy for modern enterprise business.',
  openGraph: {
    "title": "Aiden Tech Solutions | Scalable Software & AI",
    "description": "Expert AI and cloud technology partners for modern digital growth.",
    "type": "website",
    "siteName": "Aiden Tech Solutions"
  },
};



const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
