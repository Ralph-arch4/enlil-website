import type { Metadata } from 'next'
import { Space_Grotesk, Orbitron } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '500', '600', '700'],
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Enlil — Broker Luce, Gas e SIM per Aziende e Partita IVA | -30% nel 2026',
  description:
    'Broker di luce, gas, internet e SIM per PMI e Partita IVA. Mercato libero 2026: risparmio medio €8.500/anno. Analisi gratuita in 48h. Nessun costo, nessun vincolo.',
  keywords: [
    'broker luce gas imprese Italia',
    'risparmio bollette aziende',
    'consulenza energetica aziendale',
    'broker energia elettrica partita IVA',
    'riduzione costi utenze aziendali',
    'offerte luce gas business',
    'broker utenze PMI',
    'consulenza utenze aziende',
    'risparmio bollette luce gas internet',
    'gestione utenze aziendali',
    'cambio fornitore luce gas aziende',
    'migliori offerte luce gas internet SIM business',
    'broker energetico aziendale',
    'infrastruttura digitale aziendale',
    'risparmio energia imprese Italia',
    'offerte luce gas partita IVA 2026',
    'mercato libero energia aziendale 2026',
    'prezzo fisso luce gas PMI 2026',
    'cambio fornitore luce gas aziende 2026',
    'tutele graduali STG scaduto 2026',
    'decreto bollette 2026 PMI imprese',
    'legge 49 2026 bollette aziende',
    'dual fuel luce gas aziendale PMI',
    'fibra FTTH business aziendale PMI',
    'ottimizzazione costi energetici aziendali',
    'confronto fornitori energia business Italia',
    'migliore offerta luce gas imprese 2026',
    'prezzo PUN giugno 2026 aziende',
    'crisi gas aziende giugno 2026',
    'come cambiare fornitore luce gas azienda',
    'risparmio bollette gas crisi 2026 imprese',
  ],
  authors: [{ name: 'Enlil' }],
  metadataBase: new URL('https://enlil.app'),
  alternates: { canonical: 'https://enlil.app' },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://enlil.app',
    siteName: 'Enlil',
    title: 'Enlil — Broker Luce, Gas, Internet e SIM | Risparmia -30% nel 2026',
    description:
      'Broker indipendente per PMI e Partita IVA italiane. Mercato libero 2026: risparmio medio €8.500/anno su luce, gas, internet e SIM. Analisi gratuita in 48h, nessun vincolo.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Enlil — Broker Utenze Aziendali Italia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enlil | Broker Utenze Aziendali 2026 | Risparmia -30%',
    description:
      'Broker luce, gas, internet e SIM per PMI e Partita IVA. Mercato libero 2026: risparmio medio €8.500/anno. Analisi gratuita in 48h.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
}

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://enlil.app/#organization',
  name: 'Enlil',
  url: 'https://enlil.app',
  logo: 'https://enlil.app/logo.png',
  description:
    'Broker indipendente di infrastruttura digitale e mercati energetici per imprenditori e PMI italiane. Gestiamo luce, gas, internet e SIM.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@enlil.app',
    contactType: 'customer service',
    availableLanguage: 'Italian',
  },
  areaServed: 'IT',
  knowsAbout: [
    'Broker energia elettrica',
    'Broker gas naturale',
    'Consulenza utenze aziendali',
    'Fibra internet business',
    'Flotte SIM aziendali',
    'Risparmio bollette imprese',
  ],
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://enlil.app/#service',
  name: 'Broker Utenze Aziendali',
  provider: { '@type': 'Organization', '@id': 'https://enlil.app/#organization', name: 'Enlil', url: 'https://enlil.app' },
  serviceType: 'Consulenza energetica e utenze per aziende',
  description:
    'Enlil analizza gratuitamente i consumi aziendali di luce, gas, internet e SIM e negozia contratti vantaggiosi con oltre 50 fornitori del mercato italiano.',
  areaServed: { '@type': 'Country', name: 'Italia' },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: 'Consulenza gratuita e senza vincoli',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servizi di brokeraggio utenze',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Broker Energia Elettrica Business' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Broker Gas Naturale per Aziende' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Connettività Internet Aziendale' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestione Flotte SIM Aziendali' } },
    ],
  },
}

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://enlil.app/#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Cos'è un broker di utenze aziendali?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un broker di utenze come Enlil è un consulente indipendente che analizza i consumi di luce, gas, internet e SIM e negozia per tuo conto con i fornitori del mercato libero, ottenendo contratti più vantaggiosi senza costi per l'azienda cliente.",
      },
    },
    {
      '@type': 'Question',
      name: 'Il servizio di consulenza è gratuito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sì, la consulenza Enlil è completamente gratuita per l'azienda cliente. Enlil riceve una commissione dai fornitori solo quando un contratto viene attivato e approvato dal cliente. Nessun costo nascosto, nessun vincolo.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto posso risparmiare sulle bollette aziendali?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In media le PMI risparmiano tra il 15% e il 30% su luce e gas, e fino al 40% sui piani SIM aziendali. Enlil fornisce un'analisi gratuita in 48 ore con i numeri precisi per la specifica situazione aziendale.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quali servizi gestisce Enlil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enlil gestisce quattro categorie di utenze aziendali: energia elettrica (luce business), gas naturale per imprese, connettività internet (fibra FTTH/FTTB) e flotte SIM aziendali. È possibile ottimizzare tutte le utenze con un unico interlocutore.',
      },
    },
    {
      '@type': 'Question',
      name: 'Come avviene il passaggio al nuovo fornitore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Enlil gestisce l'intera pratica di migrazione: raccoglie i dati delle forniture attuali, negozia le nuove condizioni, invia le pratiche di voltura o subentro e monitora la migrazione fino all'attivazione. Il servizio non viene mai interrotto durante il passaggio.",
      },
    },
    {
      '@type': 'Question',
      name: 'Il Servizio a Tutele Graduali (STG) è già scaduto per la mia PMI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Per micro e piccole imprese, il Servizio a Tutele Graduali è scaduto ad aprile 2026: da quel momento il contratto è stato assegnato automaticamente a un fornitore imposto dal distributore locale, spesso a condizioni non ottimali. Enlil analizza gratuitamente la situazione attuale e — se il contratto imposto non è il migliore — lo sostituisce con l'offerta più conveniente tra oltre 50 fornitori. Il cambio si completa in 24h senza interruzioni.",
      },
    },
    {
      '@type': 'Question',
      name: 'Conviene una tariffa fissa o indicizzata per la luce aziendale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dipende dal profilo di consumo e dall'andamento del PUN (Prezzo Unico Nazionale). La tariffa fissa blocca il costo dell'energia per tutta la durata del contratto — ideale per aziende con budget rigidi o consumi elevati. La tariffa indicizzata (PUN + spread fisso) può essere più conveniente in fasi di mercato favorevoli, ma espone alle oscillazioni. Enlil consiglia la soluzione più adatta senza conflitti di interesse con nessun fornitore.",
      },
    },
    {
      '@type': 'Question',
      name: 'Perché le bollette aziendali sono così alte in questo periodo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A giugno 2026 il PUN (Prezzo Unico Nazionale) è tra i valori più elevati degli ultimi anni. Il gas europeo ha subito un rialzo significativo, che si trasferisce direttamente sulle bollette luce poiché circa il 45-50% dell'elettricità italiana è prodotta da centrali a gas. In questo scenario il cambio di fornitore con Enlil — che confronta in tempo reale oltre 50 fornitori — è lo strumento più efficace per limitare i danni immediati.",
      },
    },
    {
      '@type': 'Question',
      name: "Cosa prevede il Decreto Bollette 2026 (Legge 49/2026) per le PMI?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Il Decreto Bollette 2026 (Legge 49/2026) stanzia 1 miliardo di euro per abbassare gli oneri nelle bollette di imprese in bassa e media tensione, con una riduzione di 3,4 €/MWh nel 2026 e di 4 €/MWh nel 2027. Il decreto semplifica anche i Power Purchase Agreement (PPA), rendendo più accessibile l'energia rinnovabile a lungo termine per le PMI. Il cambio fornitore con Enlil aggiunge un risparmio ulteriore del 15-30%, cumulabile con i benefici del decreto.",
      },
    },
    {
      '@type': 'Question',
      name: 'Conviene cambiare fornitore energia anche con il Decreto Bollette 2026 in vigore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sì. Il Decreto Bollette 2026 riduce gli oneri di sistema di 3,4 €/MWh, ma questa riduzione è automatica e riguarda tutti. Il risparmio aggiuntivo che Enlil ottiene negoziando il prezzo dell'energia con oltre 50 fornitori (15-30% in media) si cumula con quello del decreto. Chi ha un contratto non ottimale — per esempio residuo di tutele graduali o rinnovo automatico — ha ancora più convenienza a cambiare fornitore ora.",
      },
    },
    {
      '@type': 'Question',
      name: "Posso unire luce e gas in un'unica offerta dual fuel?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sì. Le offerte dual fuel consentono di gestire energia elettrica e gas naturale con un unico fornitore e un'unica fattura, semplificando la contabilità e spesso ottenendo condizioni di prezzo migliori. Enlil confronta sistematicamente le offerte dual fuel con quelle separate per trovare la combinazione più vantaggiosa per i consumi specifici dell'azienda.",
      },
    },
  ],
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://enlil.app/#webpage',
  name: 'Enlil — Broker Luce, Gas e SIM per Aziende e Partita IVA | -30% nel 2026',
  url: 'https://enlil.app',
  description:
    'Broker indipendente di utenze aziendali per PMI italiane. Risparmio medio €8.500/anno su luce, gas, internet e SIM. Analisi gratuita in 48h, nessun vincolo.',
  inLanguage: 'it-IT',
  isPartOf: { '@type': 'WebSite', '@id': 'https://enlil.app/#website', name: 'Enlil', url: 'https://enlil.app' },
  about: { '@id': 'https://enlil.app/#organization' },
  primaryImageOfPage: { '@type': 'ImageObject', url: 'https://enlil.app/og-image.png' },
  dateModified: '2026-06-04',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://enlil.app' },
    ],
  },
}

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://enlil.app/#website',
  name: 'Enlil',
  url: 'https://enlil.app',
  inLanguage: 'it-IT',
  description: 'Broker indipendente di luce, gas, internet e SIM per PMI e Partita IVA italiane.',
  publisher: { '@id': 'https://enlil.app/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://enlil.app/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const jsonLdHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': 'https://enlil.app/#howto-cambio-fornitore',
  name: 'Come cambiare fornitore di luce e gas per la tua azienda',
  description:
    'Guida pratica per PMI e Partita IVA: come confrontare le offerte del mercato libero e cambiare fornitore di energia elettrica e gas senza interruzioni e senza costi.',
  totalTime: 'PT48H',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: '0',
  },
  supply: [
    { '@type': 'HowToSupply', name: 'Ultima bolletta luce (con codice POD)' },
    { '@type': 'HowToSupply', name: 'Ultima bolletta gas (con codice PDR)' },
    { '@type': 'HowToSupply', name: 'Partita IVA o codice fiscale aziendale' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Analisi gratuita dei consumi',
      text: "Invia a Enlil le ultime bollette di luce e gas. In 48 ore ricevi un'analisi dettagliata con il risparmio stimato rispetto alle migliori offerte di mercato disponibili.",
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Confronto tra oltre 50 fornitori',
      text: 'Enlil confronta in tempo reale le offerte di oltre 50 fornitori accreditati, valutando prezzo, affidabilità e condizioni contrattuali per il tuo specifico profilo di consumo aziendale.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Firma del nuovo contratto',
      text: "Una volta scelta l'offerta migliore, Enlil gestisce l'intera pratica contrattuale: sottoscrizione digitale, raccolta documenti e comunicazione al distributore. Nessuna burocrazia per l'azienda.",
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Migrazione senza interruzioni',
      text: "Il passaggio al nuovo fornitore avviene automaticamente entro i tempi previsti dalla legge. La fornitura non viene mai interrotta. Enlil monitora l'intera migrazione fino all'attivazione confermata.",
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${spaceGrotesk.variable} ${orbitron.variable}`}>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
