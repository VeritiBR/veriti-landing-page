import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://www.veriti.srv.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VERITI - Contabilidade e Gestão Tributária",
    template: "VERITI Contabilidade",
  },
  description:
    "Transforme a gestão financeira da sua empresa com soluções contábeis modernas, eficientes e totalmente personalizadas. Contabilidade, gestão tributária e consultoria financeira.",
  keywords: [
    "contabilidade",
    "gestão tributária",
    "consultoria financeira",
    "planejamento tributário",
    "departamento pessoal",
    "compliance",
    "abertura de empresa",
    "BPO financeiro",
  ],
  authors: [{ name: "Filipe Pio Magalhães" }],
  other: {
    copyright: "© 2025 VERITI Contabilidade e Gestão Tributária",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "VERITI - Contabilidade e Gestão Tributária",
    description:
      "Soluções contábeis modernas e personalizadas para sua empresa.",
    url: siteUrl,
    siteName: "VERITI Contabilidade",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Logo da VERITI Contabilidade com um slogan sobre contabilidade e gestão.",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VERITI - Contabilidade e Gestão Tributária",
    description:
      "Transforme a gestão da sua empresa com soluções contábeis modernas, eficientes e personalizadas.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "seu-codigo-de-verificacao-do-google-search-console",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: "#0d9488",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="gtm-script" strategy="beforeInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M3XLTJN6');
        `}</Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M3XLTJN6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
