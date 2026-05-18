import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'Elite Fur | Premium Sustainable Pet Products',
  description: 'Shop high-end, eco-friendly pet essentials at Elite Fur. Premium quality, zero-harm nutrition and gear for the conscious pet parent.',
  openGraph: {
    "title": "Elite Fur",
    "description": "Premium Sustainable Pet Products",
    "type": "website",
    "siteName": "Elite Fur"
  },
  twitter: {
    "card": "summary_large_image"
  },
};

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
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
