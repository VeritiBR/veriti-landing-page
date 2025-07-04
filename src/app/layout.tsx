import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VERITI - Contabilidade e Gestão Tributária",
  description:
    "Transforme a gestão financeira da sua empresa com soluções contábeis modernas, eficientes e totalmente personalizadas. Contabilidade, gestão tributária e consultoria financeira.",
  keywords:
    "contabilidade, gestão tributária, consultoria financeira, planejamento tributário, departamento pessoal, compliance",
  authors: [{ name: "VERITI" }],
  openGraph: {
    title: "VERITI - Contabilidade e Gestão Tributária",
    description: "Soluções contábeis modernas e personalizadas para sua empresa",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
