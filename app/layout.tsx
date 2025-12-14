import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter, Roboto, Roboto_Serif } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})
const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-serif",
})

const ADVOGADO_FOTO = "/images/forumboa.jpeg"
const LOGO_PNG = "/images/ativo-2016.png"
const FAVICON_PNG = "/images/ativo-2014.png"
const SITE_URL = "https://advogado-servidor-publico.go.droliveira.adv.br"

export const metadata: Metadata = {
  title: "Dr. Carlos Fernando Lopes de Oliveira | Advogado Servidor Público | +19 Anos de Experiência",
  description:
    "Advogado especialista em servidor público com mais de 19 anos de experiência. Defesa em PAD, licenças médicas negadas, progressão de carreira e revisão de aposentadoria. OAB/SP 524.997 | OAB/PE 24.469. Atendimento em São Paulo e todo Brasil.",
  keywords:
    "advogado servidor público, defesa PAD, processo administrativo disciplinar, licença médica negada, servidor público estadual, servidor público federal, servidor público municipal, progressão funcional, revisão aposentadoria servidor, advocacia servidor público São Paulo, OAB SP, direito administrativo, Dr Carlos Fernando Lopes de Oliveira, mandado de segurança servidor",
  authors: [{ name: "Dr. Carlos Fernando Lopes de Oliveira", url: SITE_URL }],
  generator: "v0.app",
  openGraph: {
    title: "Dr. Carlos Fernando Lopes de Oliveira | Advogado Servidor Público | +19 Anos de Experiência",
    description:
      "Advogado Mestre em Ciências Jurídicas especialista em defesa de servidores públicos. +19 anos de experiência em PAD, licenças médicas negadas e direitos do servidor. OAB/SP 524.997 | OAB/PE 24.469.",
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Dr. Oliveira Advocacia & Associados",
    images: [
      {
        url: ADVOGADO_FOTO,
        width: 800,
        height: 600,
        alt: "Dr. Carlos Fernando Lopes de Oliveira - Advogado Especialista em Servidor Público",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Carlos Fernando Lopes de Oliveira | Advogado Servidor Público",
    description:
      "Advogado Mestre em Ciências Jurídicas com +19 anos de experiência. Defesa em PAD, licenças médicas e direitos do servidor.",
    images: [ADVOGADO_FOTO],
  },
  icons: {
    icon: [{ url: FAVICON_PNG, type: "image/png" }],
    apple: FAVICON_PNG,
    shortcut: FAVICON_PNG,
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
  alternates: {
    canonical: SITE_URL,
  },
}

export const viewport: Viewport = {
  themeColor: "#082533",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} ${roboto.variable} ${robotoSerif.variable} scroll-smooth`}
    >
      <head>
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WV3MG7ZN');`}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WV3MG7ZN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
