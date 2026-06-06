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
  title: "Enlil — Broker Luce, Gas e SIM per Aziende | PUN +11% Giugno 2026: Risparmia Ora",
  description:
    "PUN a 0,275 €/kWh: +11,7% in 7 giorni. Broker luce, gas, internet e SIM per PMI e Partita IVA. Risparmio medio €8.500/anno. Cambio fornitore in 24h. Analisi gratuita, nessun vincolo.",
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
    "tutele graduali STG scaduto 2026",
    "cambio fornitore dopo STG scaduto",
    "decreto bollette 2026 PMI imprese",
    "dual fuel luce gas aziendale PMI",
    "fibra FTTH business aziendale PMI",
    "ottimizzazione costi energetici aziendali",
    "confronto fornitori energia business Italia",
    "migliore offerta luce gas imprese 2026",
    "risparmio energia PMI 5-50 dipendenti",
    "prezzo PUN maggio giugno 2026 aziende",
    "crisi gas aziende giugno 2026",
    "gas naturale +35% 2026 imprese Italia",
    "costo energia elettrica alto giugno 2026 PMI",
    "risparmio bollette gas crisi 2026 imprese",
    "PUN giugno 2026 aziende PMI",
    "PSV gas giugno 2026 imprese",
    "cambio fornitore luce 24 ore 2026",
    "IVA 10 utenze business aziendali",
    "bollette luce rincaro giugno 2026 PMI",
    "costo kWh aziendale giugno 2026",
    "decreto bollette 2026 agevolazioni imprese",
    "fornitore luce gas economico aziende 2026",
    "risparmio bollette cambio fornitore 24 ore",
    "confronto tariffe luce gas business giugno 2026",
  ],
  authors: [{ name: "Enlil" }],
  metadataBase: new URL("https://enlil.app"),
  alternates: { canonical: "https://enlil.app" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://enlil.app",
    siteName: "Enlil",
    title: "Enlil — Broker Luce, Gas e SIM per Aziende | PUN +11% Giugno 2026: Risparmia Ora",
    description:
      "PUN a 0,275 €/kWh (+11,7% in 7 giorni). Broker indipendente per PMI e Partita IVA italiane. Risparmio medio €8.500/anno su luce, gas, internet e SIM. Cambio fornitore in 24h. Analisi gratuita, nessun vincolo.",
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
    title: "Enlil | Broker Utenze Aziendali | PUN 0,275 €/kWh Giugno 2026 | Risparmia Subito",
    description:
      "Bollette alle stelle: PUN +11,7% in 7 giorni. Broker luce, gas, internet e SIM per PMI e Partita IVA. Risparmio medio €8.500/anno. Cambio fornitore in 24h.",
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
      name: "Perché le bollette aziendali sono così alte in questo periodo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A giugno 2026 il PUN (Prezzo Unico Nazionale dell'energia elettrica) ha raggiunto 0,275 €/kWh, con un rialzo dell'11,7% negli ultimi 7 giorni. Il PSV del gas naturale è a 0,547 €/Smc, ai massimi del 2026. Il gas europeo ha subito un rialzo del 35% a causa della crisi dello Stretto di Hormuz tra USA, Israele e Iran, che ha ridotto le forniture LNG. Poiché il 45-50% dell'elettricità italiana è prodotta da centrali a gas, il caro-gas si trasferisce direttamente sulle bollette luce. La spesa energetica delle PMI del terziario è già superiore del 38,9% rispetto al 2019. In questo scenario il cambio di fornitore con Enlil — che confronta in tempo reale oltre 50 fornitori — è lo strumento più efficace per limitare i danni: dal 1° gennaio 2026 il cambio fornitore per la luce si completa in sole 24 ore lavorative.",
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

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Enlil — Broker Luce, Gas e SIM per Aziende e Partita IVA | -30% nel 2026",
  url: "https://enlil.app",
  description:
    "Broker indipendente di utenze aziendali per PMI italiane. Risparmio medio €8.500/anno su luce, gas, internet e SIM. Analisi gratuita in 48h, nessun vincolo.",
  inLanguage: "it-IT",
  isPartOf: { "@type": "WebSite", name: "Enlil", url: "https://enlil.app" },
  about: { "@type": "Organization", name: "Enlil", url: "https://enlil.app" },
  primaryImageOfPage: { "@type": "ImageObject", url: "https://enlil.app/og-image.png" },
  dateModified: "2026-06-06",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://enlil.app" },
    ],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
