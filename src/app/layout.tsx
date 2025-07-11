import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = "https://www.veriti.srv.br"

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
    'copyright': '© 2025 VERITI Contabilidade e Gestão Tributária',
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
    description: "Soluções contábeis modernas e personalizadas para sua empresa.",
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
    description: "Transforme a gestão da sua empresa com soluções contábeis modernas, eficientes e personalizadas.",
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

  themeColor: "#0d9488",

  // --- META DE VERIFICAÇÃO (EXEMPLO GOOGLE) ---
  // verification: {
  //   google: "seu-codigo-de-verificacao-do-google-search-console",
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-6V46GYYPP6`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6V46GYYPP6');
          `}
        </Script>
      </body>
    </html>
  )
}