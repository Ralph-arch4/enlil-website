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
  title: "Enlil — Broker Luce, Gas e SIM per Aziende e Partita IVA | -30% nel 2026",
  description:
    "Broker di luce, gas, internet e SIM per PMI e Partita IVA. Mercato libero 2026: risparmio medio €8.500/anno. Analisi gratuita in 48h. Nessun costo, nessun vincolo.",
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
    "offerte luce gas partita IVA 2026",
    "mercato libero energia aziendale 2026",
    "prezzo fisso luce gas PMI 2026",
    "cambio fornitore luce gas aziende 2026",
    "tutele graduali STG scadenza 2027",
    "ottimizzazione costi energetici aziendali",
    "confronto fornitori energia business Italia",
  ],
  authors: [{ name: "Enlil" }],
  metadataBase: new URL("https://enlil.app"),
  alternates: { canonical: "https://enlil.app" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://enlil.app",
    siteName: "Enlil",
    title: "Enlil — Broker Luce, Gas, Internet e SIM | Risparmia -30% nel 2026",
    description:
      "Broker indipendente per PMI e Partita IVA italiane. Mercato libero 2026: risparmio medio €8.500/anno su luce, gas, internet e SIM. Analisi gratuita in 48h, nessun vincolo.",
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
    title: "Enlil | Broker Utenze Aziendali 2026 | Risparmia -30%",
    description:
      "Broker luce, gas, internet e SIM per PMI e Partita IVA. Mercato libero 2026: risparmio medio €8.500/anno. Analisi gratuita in 48h.",
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
      name: "Il Servizio a Tutele Graduali (STG) è già scaduto per la mia PMI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per micro e piccole imprese, il Servizio a Tutele Graduali è scaduto ad aprile 2026: da quel momento il contratto è stato assegnato automaticamente a un fornitore imposto dal distributore locale, spesso a condizioni non ottimali. Se la tua azienda era in STG, molto probabilmente sei già passato a un'offerta di mercato libero che non hai scelto tu. Enlil analizza gratuitamente la situazione attuale e — se il contratto imposto non è il migliore — lo sostituisce con l'offerta più conveniente tra oltre 50 fornitori. Il cambio si completa in 24h senza interruzioni.",
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
