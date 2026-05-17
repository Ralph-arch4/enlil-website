import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enlil — Broker Luce, Gas, Internet e SIM per Aziende | Risparmia Fino al 30%",
  description:
    "Enlil è il broker indipendente di utenze aziendali in Italia. Gestiamo luce, gas, fibra internet e SIM per PMI e imprenditori. Analisi gratuita in 48h. Risparmio medio €8.500/anno. Nessun costo, nessun vincolo.",
  keywords: [
    "broker luce gas imprese Italia",
    "risparmio bollette aziende",
    "consulenza energetica aziendale",
    "broker energia elettrica partita IVA",
    "riduzione costi utenze aziendali",
    "offerte luce gas business",
    "broker utenze PMI",
    "consulenza utenze aziende",
    "risparmio bollette luce gas internet",
    "gestione utenze aziendali",
    "cambio fornitore luce gas aziende",
    "migliori offerte luce gas internet SIM business",
    "broker energetico aziendale",
    "infrastruttura digitale aziendale",
    "risparmio energia imprese Italia",
  ],
  authors: [{ name: "Enlil" }],
  metadataBase: new URL("https://enlil.app"),
  alternates: { canonical: "https://enlil.app" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://enlil.app",
    siteName: "Enlil",
    title: "Enlil — Broker Luce, Gas, Internet e SIM per Aziende Italiane",
    description:
      "Broker indipendente di utenze e infrastruttura digitale per PMI e imprenditori italiani. Risparmio medio €8.500/anno su luce, gas, internet e SIM. Consulenza gratuita.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Enlil — Broker Utenze Aziendali Italia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enlil — Broker Utenze Aziendali | Risparmia Fino al 30%",
    description:
      "Luce, gas, internet e SIM per aziende italiane. Analisi gratuita in 48h. Risparmio medio €8.500/anno.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Enlil",
  url: "https://enlil.app",
  logo: "https://enlil.app/logo.png",
  description:
    "Broker indipendente di infrastruttura digitale e mercati energetici per imprenditori e PMI italiane. Gestiamo luce, gas, internet e SIM.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@enlil.app",
    contactType: "customer service",
    availableLanguage: "Italian",
  },
  areaServed: "IT",
  knowsAbout: [
    "Broker energia elettrica",
    "Broker gas naturale",
    "Consulenza utenze aziendali",
    "Fibra internet business",
    "Flotte SIM aziendali",
    "Risparmio bollette imprese",
  ],
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Broker Utenze Aziendali",
  provider: { "@type": "Organization", name: "Enlil", url: "https://enlil.app" },
  serviceType: "Consulenza energetica e utenze per aziende",
  description:
    "Enlil analizza gratuitamente i consumi aziendali di luce, gas, internet e SIM e negozia contratti vantaggiosi con oltre 50 fornitori del mercato italiano.",
  areaServed: { "@type": "Country", name: "Italia" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Consulenza gratuita e senza vincoli",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servizi di brokeraggio utenze",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Broker Energia Elettrica Business" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Broker Gas Naturale per Aziende" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Connettività Internet Aziendale" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestione Flotte SIM Aziendali" } },
    ],
  },
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cos'è un broker di utenze aziendali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un broker di utenze come Enlil è un consulente indipendente che analizza i consumi di luce, gas, internet e SIM e negozia per tuo conto con i fornitori del mercato libero, ottenendo contratti più vantaggiosi senza costi per l'azienda cliente.",
      },
    },
    {
      "@type": "Question",
      name: "Il servizio di consulenza è gratuito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, la consulenza Enlil è completamente gratuita per l'azienda cliente. Enlil riceve una commissione dai fornitori solo quando un contratto viene attivato e approvato dal cliente. Nessun costo nascosto, nessun vincolo.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto posso risparmiare sulle bollette aziendali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In media le PMI risparmiano tra il 15% e il 30% su luce e gas, e fino al 40% sui piani SIM aziendali. Enlil fornisce un'analisi gratuita in 48 ore con i numeri precisi per la specifica situazione aziendale.",
      },
    },
    {
      "@type": "Question",
      name: "Quali servizi gestisce Enlil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enlil gestisce quattro categorie di utenze aziendali: energia elettrica (luce business), gas naturale per imprese, connettività internet (fibra FTTH/FTTB) e flotte SIM aziendali. È possibile ottimizzare tutte le utenze con un unico interlocutore.",
      },
    },
    {
      "@type": "Question",
      name: "Come avviene il passaggio al nuovo fornitore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enlil gestisce l'intera pratica di migrazione: raccoglie i dati delle forniture attuali, negozia le nuove condizioni, invia le pratiche di voltura o subentro e monitora la migrazione fino all'attivazione. Il servizio non viene mai interrotto durante il passaggio.",
      },
    },
    {
      "@type": "Question",
      name: "Sono ancora sul Servizio a Tutele Graduali (STG), devo preoccuparmi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Il Servizio a Tutele Graduali è il regime transitorio ARERA per chi non ha ancora scelto un fornitore nel mercato libero — le tariffe STG sono tipicamente superiori alle migliori offerte disponibili. Dal 1° aprile 2027 il contratto passerà automaticamente a un'offerta imposta dal distributore, senza possibilità di negoziazione. Enlil analizza gratuitamente la situazione attuale e porta l'azienda sulla migliore offerta di mercato libero prima della scadenza.",
      },
    },
    {
      "@type": "Question",
      name: "Conviene una tariffa fissa o indicizzata per la luce aziendale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dipende dal profilo di consumo e dall'andamento del PUN (Prezzo Unico Nazionale). La tariffa fissa blocca il costo dell'energia per tutta la durata del contratto — ideale per aziende con budget rigidi o consumi elevati. La tariffa indicizzata (PUN + spread fisso) può essere più conveniente in fasi di mercato favorevoli, ma espone alle oscillazioni. Enlil consiglia la soluzione più adatta senza conflitti di interesse con nessun fornitore.",
      },
    },
    {
      "@type": "Question",
      name: "Posso unire luce e gas in un'unica offerta dual fuel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Le offerte dual fuel consentono di gestire energia elettrica e gas naturale con un unico fornitore e un'unica fattura, semplificando la contabilità e spesso ottenendo condizioni di prezzo migliori. Enlil confronta sistematicamente le offerte dual fuel con quelle separate per trovare la combinazione più vantaggiosa per i consumi specifici dell'azienda.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
