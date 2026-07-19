import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeScript } from "@/components/ui/ThemeScript";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eslam Metawie | Software Engineer & DevOps Engineer",
  description: "Portfolio of Eslam Metawie, a Software Engineer and DevOps Engineer working with modern web applications, CI/CD, automated testing, Docker, Azure, Chocolatey, and software release automation.",
  keywords: [
    "Eslam Metawie",
    "Metawie Software Engineer",
    "Eslam Metawie DevOps",
    "Software Engineer Germany",
    "DevOps portfolio",
    "Ostfalia Informatik",
    "CI/CD engineer portfolio",
    "Full-Stack Developer portfolio"
  ],
  authors: [{ name: "Eslam Metawie" }],
  creator: "Eslam Metawie",
  publisher: "Eslam Metawie",
  metadataBase: new URL("https://metawie.pages.dev"), // Fallback base URL for metadata
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://metawie.pages.dev",
    title: "Eslam Metawie | Software Engineer & DevOps Engineer",
    description: "Portfolio of Eslam Metawie, showcasing full-stack applications, automated CI/CD pipelines, and DevOps workflows.",
    siteName: "METAWIE Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 800,
        alt: "METAWIE Portfolio Logo",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eslam Metawie | Software Engineer & DevOps Engineer",
    description: "Portfolio of Eslam Metawie, showcasing full-stack applications, automated CI/CD pipelines, and DevOps workflows.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexArabic.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col bg-bg-main text-fg-main font-sans">
        <Providers>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
