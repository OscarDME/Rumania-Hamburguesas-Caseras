// lib/copy.js
// Singura sursă de adevăr pentru TOT textul vizibil de pe landing page.
// Orice text pe care utilizatorul îl poate citi pe ecran TREBUIE să fie aici.

export const copy = {
  metadata: {
    title: "101 Burgeri de Casă | Carte Digitală de Rețete",
    description:
      "Carte digitală de rețete pentru burgeri de casă. 101 rețete ușoare, suculente și pline de savoare, ca să pregătești burgeri irezistibili chiar la tine în bucătărie.",
  },

  promoBar: {
    text: "Ofertă specială valabilă pentru un timp limitat",
    icon: "flame",
  },

  hero: {
    eyebrow: "Carte digitală de rețete pentru burgeri de casă",
    headline: {
      pre: "101 burgeri de casă ca să-i",
      accent: "dai gata pe toți cei dragi",
    },
    subheadline:
      "Descoperă rețete simple, zemoase și teribil de gustoase pentru burgeri irezistibili. Fără tehnici complicate, fără să spargi pușculița și fără să mai apelezi la fast-food.",
    paragraph:
      "Transformă orice masă într-un moment special cu idei practice și delicioase, perfecte pentru a fi împărțite cu familia și gașca de prieteni.",
    stats: [
      { value: "101", label: "idei savuroase" },
      { value: "Acasă", label: "cu gust de restaurant" },
    ],
    bullets: [
      "101 rețete diferite și originale",
      "Burgeri suculenți și rapid de făcut",
      "Ingrediente ieftine și ușor de găsit",
      "Variante cu vită, pui și multe altele",
      "Idei perfecte pentru serile cu prietenii",
      "Gust delicios, fix ca la restaurant",
    ],
    cta: "VREAU CEI 101 BURGERI",
    trust: [
      { icon: "lock", text: "Acces instantaneu" },
      { icon: "mail", text: "Livrare direct pe email" },
      { icon: "card", text: "Plată 100% securizată" },
    ],
    image: "/hero-mockup.webp",
    imageAlt: "Pachet 101 Burgeri de Casă - Carte digitală",
    badge: "101 idei delicioase",
  },

  story: {
    eyebrow: "Mâncarea genială nu trebuie neapărat comandată",
    headline: {
      pre: "Nu trebuie să ieși din casă ca să te bucuri de un",
      accent: "burger cu adevărat memorabil",
    },
    paragraphs: [
      {
        text: "De multe ori problema nu e că ne e foame... problema e că suntem în pană de idei când vine vorba să pregătim ceva zemos, diferit și cu acel gust care te face să te lingi pe degete.",
        style: "default",
      },
      {
        text: "Făcut la tine acasă, cu o savoare irezistibilă.",
        style: "bold-accent",
      },
    ],
    painsTitle: "Când ești în pană de idei, uite ce se întâmplă:",
    pains: [
      "Gătești mereu aceleași lucruri plictisitoare.",
      "Obții burgeri uscați sau complet fără gust.",
      "Bâjbâi când vine vorba de combinat sosuri și toppinguri.",
      "Comanzi fast-food în loc să faci ceva delicios acasă.",
      "Rămâi constant în pană de inspirație pentru cină sau weekend.",
    ],
    bridge:
      "Diferența constă în a avea rețete clare, combinații testate și pași simpli de urmat, astfel încât fiecare burger pe care îl faci să fie o experiență în sine.",
    image: "/chef-hamburguesas.webp",
    imageAlt: "Burger de casă, gata de servire",
  },

  steps: {
    eyebrow: "Doar 3 pași până la răsfățul de acasă",
    headline: {
      pre: "În sfârșit, o metodă simplă să pregătești",
      accent: "burgeri de casă demențiali",
      post: "pentru toată familia",
    },
    subheadline:
      "Bucură-te de rețete suculente, ușoare și pline de gust, fără să ieși din casă, fără să te complici și fără să mănânci mereu același lucru.",
    paragraph:
      "Tot ce trebuie să faci este să alegi o rețetă, să urmezi câțiva pași banali și să te bucuri de o mâncare din care toți vor mai cere o porție.",
    items: [
      {
        number: "01",
        title: "Alege un burger pentru orice ocazie",
        body: "De la o cină rapidă în timpul săptămânii până la un weekend leneș în familie – vei avea mereu la îndemână o idee delicioasă, fără să stai prea mult pe gânduri.",
      },
      {
        number: "02",
        title: "Pregătește rețete pline de savoare",
        body: "Urmează combinații geniale cu carne, pui, brânzeturi, sosuri și extra toppinguri pentru a crea burgeri zemoși, cu acea notă autentică de casă.",
      },
      {
        number: "03",
        title: "Bucură-te de o masă care îi aduce pe toți împreună",
        body: "Servește burgeri irezistibili și transformă o simplă masă într-un moment de bucurie pură alături de prieteni și familie.",
      },
    ],
    cta: "VREAU CEI 101 BURGERI",
    trust: [
      { icon: "lock", text: "Acces instantaneu" },
      { icon: "mail", text: "Livrare direct pe email" },
      { icon: "card", text: "Plată 100% securizată" },
    ],
  },

  benefits: {
    eyebrow: "Mai mult gust, mai puțin efort",
    headline: {
      pre: "Uite ce se schimbă când ai",
      accent: "101 idei",
      post: "să faci burgeri acasă",
    },
    subheadline:
      "Nu mai improviza cu aceleași ingrediente obosite și transformă fiecare masă într-un festin făcut în casă, extrem de gustos și ușor de împărțit.",
    items: [
      {
        title: "Scapi de pana de idei",
        body: "Ai mereu o rețetă nouă la dispoziție ca să încropești ceva bun, fără să-ți bați capul.",
        icon: "sparkles",
      },
      {
        title: "Transformi mesele în momente speciale",
        body: "Schimbi o cină oarecare într-o experiență culinară pe care să o împarți cu cei dragi.",
        icon: "heart",
      },
      {
        title: "Te bucuri de un gust premium, din bucătăria ta",
        body: "Pregătești burgeri zemoși, cu niște combinații care au un gust exact ca la restaurant.",
        icon: "home",
      },
      {
        title: "Gătești fără bătăi de cap",
        body: "Folosești rețete simple, ingrediente accesibile și pași mura-n gură.",
        icon: "zap",
      },
      {
        title: "Ai opțiuni pentru absolut orice ocazie",
        body: "De la o cină pe fugă, la un weekend de relaxare sau o seară de jocuri cu gașca.",
        icon: "users",
      },
      {
        title: "Uiți de poftele neîmplinite",
        body: "Când te lovește pofta de ceva bun, îl faci tu singur, fără să mai aștepți livratorul.",
        icon: "utensils",
      },
    ],
    closing: {
      pre: "Cu această carte, prepararea burgerilor acasă nu mai e o corvoadă plictisitoare, ci devine cea mai simplă metodă de a-i",
      accent: "răsfăța pe toți cu ceva cu adevărat delicios.",
    },
  },

  features: {
    eyebrow: "Tot ce ai nevoie pentru a aduce varietate în meniu",
    headline: {
      pre: "101 burgeri de casă care fac din fiecare masă ceva",
      accent: "irezistibil",
    },
    subheadline:
      "O carte de rețete extrem de practică pentru a pregăti burgeri zemoși, diverși și plini de gust, fără stres, cu opțiuni pentru toate gusturile, poftele și ocaziile posibile.",
    items: [
      {
        emoji: "🍔",
        eyebrow: "Pe gustul tău",
        title: "Burgeri pentru orice poftă",
        body: "Descoperă rețete clasice, cremoase, crocante, picante, consistente sau mai lejere și alege fix ce ai chef să mănânci azi.",
      },
      {
        emoji: "👨‍🍳",
        eyebrow: "Pas cu pas",
        title: "Metoda de preparare explicată clar",
        body: "Urmează instrucțiuni simple ca să asamblezi fiecare burger, fără să mai ghicești cantitățile, combinațiile sau ordinea ingredientelor.",
      },
      {
        emoji: "🥬",
        eyebrow: "Ingrediente",
        title: "Combinații și texturi inedite",
        body: "Folosește carne de vită, pui, brânzeturi, bacon, legume, ciuperci, avocado, murături și alte toppinguri pentru a crea gusturi wow.",
      },
      {
        emoji: "🔥",
        eyebrow: "Extra savoare",
        title: "Sosuri și detalii care fac diferența",
        body: "Dă mai mult caracter burgerilor tăi cu dressinguri făcute în casă, sosuri cremoase, BBQ, muștar, condimente și acele mici secrete culinare.",
      },
      {
        emoji: "🏡",
        eyebrow: "De împărțit",
        title: "Idei pentru weekenduri și petreceri",
        body: "Pregătește burgeri care sunt perfecți pentru a fi împărțiți cu familia, pentru a-ți impresiona musafirii sau pur și simplu pentru un prânz special.",
      },
      {
        emoji: "🚚",
        eyebrow: "Fără livrări",
        title: "Gust de top, fără să aștepți comanda",
        body: "Potolește-ți foamea cu rețete bogate, cu gust autentic de casă, care te vor satisface mult mai mult decât orice comandă de fast-food.",
      },
    ],
    cta: "VREAU CEI 101 BURGERI",
    trust: [
      { icon: "lock", text: "Acces instantaneu" },
      { icon: "mail", text: "Livrare direct pe email" },
      { icon: "card", text: "Plată 100% securizată" },
    ],
  },

  carouselSection: {
    eyebrow: "Rețete ușoare pentru un răsfăț la tine acasă",
    headline: {
      pre: "Burgeri de casă demențiali în",
      accent: "variante simple și practice",
    },
    images: [
      { src: "/carousel/slide-1.webp", alt: "Burger suculent de casă, servit pe un tocător de lemn" },
      { src: "/carousel/slide-2.webp", alt: "Burger cu bacon crocant și brânză topită" },
      { src: "/carousel/slide-3.webp", alt: "Varietate mare de burgeri făcuți în casă" },
      { src: "/carousel/slide-4.webp", alt: "Procesul pas cu pas de preparare a unui burger" },
    ],
    chips: [
      "RAPID DE PREGĂTIT",
      "INGREDIENTE ACCESIBILE",
      "GUST AUTENTIC DE CASĂ",
      "IDEALI PENTRU PRIETENI",
    ],
    forYouTitle: "„101 Burgeri de Casă” e fix pentru tine dacă:",
    forYou: [
      {
        title: "Vrei să gătești ceva gustos, fără bătăi de cap:",
        body: "ai la dispoziție rețete super ușor de urmărit, create ca să obții burgeri excelenți fără să pierzi ore întregi în bucătărie.",
      },
      {
        title: "Cauți idei rapide pentru mesele acasă:",
        body: "găsești variante practice pentru zilele în care vrei să mănânci ceva bun, dar n-ai chef să te gândești ce să gătești.",
      },
      {
        title: "Adori să îți răsfeți familia și prietenii:",
        body: "prepari burgeri zemoși, cu gust autentic, perfecți pentru cinele din weekend sau serile de meci.",
      },
      {
        title: "Îți dorești diversitate, dar fără rețete complicate:",
        body: "descoperi combinații noi de carne, pui, brânzeturi, sosuri și legume, ca să nu mai mâncați mereu la fel.",
      },
      {
        title: "Preferi gustul de casă în locul mâncării comandate:",
        body: "faci acasă burgeri aromați, practici și mult mai sățioși fix atunci când te lovește pofta.",
      },
    ],
    cta: "VREAU CEI 101 BURGERI",
    trust: [
      { icon: "lock", text: "Acces instantaneu" },
      { icon: "mail", text: "Livrare direct pe email" },
      { icon: "card", text: "Plată 100% securizată" },
    ],
    a11yPrev: "Rețeta anterioară",
    a11yNext: "Rețeta următoare",
    a11yDot: "Mergi la rețetă",
  },

  bonuses: {
    eyebrow: "Cadouri incluse pentru un timp limitat",
    headline: {
      pre: "Dacă iei acum",
      accent: "101 Burgeri de Casă",
      post: ", primești și aceste bonusuri",
    },
    intro:
      "Du-ți burgerii la un alt nivel cu aceste ghiduri practice pentru a pregăti sosuri și dressinguri de casă care dau o cu totul altă savoare oricărei rețete.",
    items: [
      {
        badge: "🎁 BONUS 1",
        title: "Ghidul Definitiv pentru Sosuri de Casă",
        body: "Rețete simple pentru a prepara sosuri cremoase, BBQ, picante și absolut delicioase, care îți vor face burgerii să iasă din anonimat.",
        priceLabel: "Valoare reală:",
        priceValue: "Inclus GRATUIT",
        image: "/bonuses/bono-salsas.webp",
        imageAlt: "Ghidul Definitiv pentru Sosuri de Casă",
      },
      {
        badge: "🎁 BONUS 2",
        title: "Ghidul Complet pentru Dressinguri",
        body: "Învață să pregătești dressinguri practice și extrem de gustoase, ideale pentru burgeri, cartofi prăjiți, salate și alte garnituri.",
        priceLabel: "Valoare reală:",
        priceValue: "Inclus GRATUIT",
        image: "/bonuses/bono-aderezos.webp",
        imageAlt: "Ghidul Complet pentru Dressinguri",
      },
    ],
    outro: {
      pre: "Cu aceste bonusuri vei putea să dai burgerilor tăi acel touch final de aromă care transformă o rețetă banală într-una",
      accent: "cu adevărat memorabilă.",
    },
    cta: "VREAU CEI 101 BURGERI",
    trust: [
      { icon: "lock", text: "Acces instantaneu" },
      { icon: "mail", text: "Livrare direct pe email" },
      { icon: "card", text: "Plată 100% securizată" },
    ],
  },

  recap: {
    eyebrow: "Ai totul inclus într-un singur pachet",
    headline: {
      pre: "Tot ce vei primi pentru a face",
      accent: "burgeri de casă irezistibili",
    },
    subheadline:
      "Cartea principală de rețete plus ghidurile suplimentare, ca să îți completezi creațiile cu sosuri, dressinguri și combinații explozive.",
    paragraph: "Azi nu mai trebuie să stai pe gânduri ca să te apuci de treabă.",
    body: "Vei avea acces imediat la o colecție super practică de rețete și idei pentru a face burgeri suculenți și ușori, împreună cu resurse extra care scot la iveală maximum de savoare din orice preparat.",
    highlight:
      "✨ Include cartea principală de rețete + bonusuri speciale menite să-ți ducă preparatele la nivelul următor",
    cta: "VREAU CEI 101 BURGERI",
    trust: [
      { icon: "lock", text: "Acces instantaneu" },
      { icon: "mail", text: "Livrare direct pe email" },
      { icon: "card", text: "Plată 100% securizată" },
    ],
  },

  testimonials: {
    eyebrow: "Păreri de la oameni care adoră să gătească acasă",
    headline: {
      pre: "Uite ce spun cei care deja pregătesc",
      accent: "burgeri geniali la ei în bucătărie",
    },
    subheadline:
      "Povești reale ale oamenilor care voiau mai multe idei, mai mult gust și mese mai speciale, fără să depindă mereu de curieri.",
    items: [
      {
        name: "Maria I.",
        role: "Gătește pentru toată familia",
        avatar: "/testimonials/avatar-1.webp",
        quote:
          "Mi-a plăcut la nebunie pentru că nu mai fac mereu același burger obosit. Acum am zeci de idei să-i fac diferiți și mult mai gustoși chiar la noi în bucătărie.",
      },
      {
        name: "Andrei P.",
        role: "Ideal pentru weekenduri",
        avatar: "/testimonials/avatar-2.webp",
        quote:
          "Combinațiile de sosuri și toppinguri sunt geniale. Burgerii mei au acum un gust de pub adevărat, dar sunt făcuți la mine pe aragaz.",
      },
      {
        name: "Corina R.",
        role: "Mai mult gust, mai puține comenzi",
        avatar: "/testimonials/avatar-3.webp",
        quote:
          "Am luat cartea ca să mă las de comandat fast-food încontinuu. Acum, când ne lovește pofta, facem niște burgeri demențiali acasă.",
      },
      {
        name: "Ionuț M.",
        role: "Rețete simple și practice",
        avatar: "/testimonials/avatar-4.webp",
        quote:
          "Rețetele sunt super ușor de urmărit. Nu trebuie să fii vreun Masterchef, doar îți alegi o idee și în doi timpi și trei mișcări ai ceva delicios pe masă.",
      },
      {
        name: "Sofia G.",
        role: "Perfect pentru petreceri",
        avatar: "/testimonials/avatar-5.webp",
        quote:
          "Am adorat faptul că ai variante pentru toate gusturile. Am făcut o seară de burgeri cu gașca și efectiv toți au mai cerut o porție.",
      },
    ],
    cta: "VREAU CEI 101 BURGERI",
    trust: [
      { icon: "lock", text: "Acces instantaneu" },
      { icon: "mail", text: "Livrare direct pe email" },
      { icon: "card", text: "Plată 100% securizată" },
    ],
    starsAlt: "5 din 5 stele",
  },

  finalCta: {
    eyebrow: "🔥 Ofertă specială valabilă doar azi",
    headline: {
      pre: "Ia-ți acum",
      accent: "101 Burgeri de Casă",
      post: "cu bonusurile incluse",
    },
    subheadline:
      "Pregătește burgeri suculenți, rapizi și incredibil de gustoși acasă, cu rețete perfecte pentru cine relaxate, weekenduri, întâlniri cu gașca sau pofte fulgerătoare.",
    badge: "🎁 Include cartea de rețete + cadourile bonus",
    productName: {
      pre: "101 Burgeri",
      accent: "de Casă",
    },
    productTagline:
      "Rețete simple, gustoase și practice pentru a face burgeri care dau clasă oricărui restaurant.",
    bullets: [
      "Primești cartea de bază cu 101 idei de burgeri.",
      "Descoperi rețete clasice, cremoase, crocante și picante.",
      "Găsești variante cu vită, pui, brânză, bacon și legume.",
      "Urmezi instrucțiuni clare, pas cu pas, fără stres.",
      "Iei Bonusul 1: Ghidul definitiv pentru sosuri de casă.",
      "Iei Bonusul 2: Ghidul complet pentru dressinguri.",
      "Ai surse de inspirație pentru cine rapide și weekenduri.",
      "Obții acces digital instant la tot materialul.",
    ],
    closing: {
      pre: "Pachetul ideal dacă vrei să mănânci ceva senzațional fără să mai depinzi de aplicațiile de delivery:",
      body: "vei avea zeci de idei practice să faci burgeri suculenți acasă și să împarți bucuria cu prietenii și familia.",
    },
    priceOldLabel: "Înainte:",
    priceOld: "150 lei",
    priceNote: "Ofertă valabilă EXCLUSIV astăzi",
    priceNow: "35",
    priceCurrency: "lei",
    priceFooter: "Acces digital instantaneu la produsul principal și la bonusurile incluse.",
    urgency: "Ultimele exemplare la preț redus",
    discountPct: "76%",
    discountLabel: "REDUCERE",
    button: "DA, VREAU CEI 101 BURGERI",
    trust: [
      { icon: "lock", text: "Plată securizată" },
      { icon: "mail", text: "Acces pe email" },
      { icon: "zap", text: "Livrare instantă" },
    ],
    imageAlt: "Pachet 101 Burgeri de Casă cu bonusuri incluse",
  },

  faq: {
    eyebrow: "Întrebări frecvente",
    headline: {
      pre: "Îți clarificăm orice dubiu înainte să te apuci de făcut",
      accent: "burgeri de casă",
    },
    subheadline:
      "Aici găsești cele mai comune răspunsuri despre cartea de rețete, bonusuri și modul de accesare a produsului.",
    items: [
      {
        q: "Cum voi primi rețetele?",
        a: "Imediat ce finalizezi plata, vei primi accesul digital la rețete pe adresa de email folosită la cumpărare.",
      },
      {
        q: "Pot să le citesc de pe telefon?",
        a: "Da, clar. Poți accesa materialele de pe telefon, tabletă sau laptop. Ai nevoie doar de o conexiune la internet ca să le deschizi.",
      },
      {
        q: "Trebuie să fiu as în bucătărie?",
        a: "Nici pe departe. Rețetele sunt gândite să fie extrem de simple, practice și clare, chiar dacă abia știi să prăjești un ou.",
      },
      {
        q: "Ce include mai exact cumpărătura?",
        a: "Include cartea digitală principală „101 Burgeri de Casă”, plus bonusurile speciale: ghidul pentru sosuri și ghidul pentru dressinguri.",
      },
      {
        q: "Rețetele sunt complicate sau folosesc ingrediente dubioase?",
        a: "Nu. Ideea de bază este să poți face burgeri excepționali acasă, fără tehnici SF sau ingrediente pe care nu le găsești la supermarketul de la colț.",
      },
      {
        q: "Când pot să mă apuc de treabă?",
        a: "Te poți apuca în momentul în care primești accesul. Pur și simplu îți alegi o rețetă, urmărești pașii și gata.",
      },
    ],
    cta: "VREAU CEI 101 BURGERI",
    trust: [
      { icon: "lock", text: "Plată securizată" },
      { icon: "mail", text: "Acces instantaneu" },
      { icon: "burger", text: "Bonusuri incluse" },
    ],
  },

  closing: {
    eyebrow: "Începe chiar de azi în propria ta bucătărie",
    headline: {
      pre: "Pregătește primii tăi",
      accent: "burgeri adevărați",
      post: "chiar săptămâna asta",
    },
    paragraph:
      "Ia-ți cartea de rețete, alege primul tău burger și transformă orice cină într-o super amintire pe care să o împarți cu cei dragi.",
    cta: "VREAU CEI 101 BURGERI",
    whatsapp: "Scrie-ne pe WhatsApp",
    imageAlt: "Burger de casă, gata de devorat",
  },

  footer: {
    brand: "Crearis",
    tagline: "Carte digitală de rețete pentru burgeri de casă",
    rightsPrefix: "©",
    rightsSuffix: "Crearis. Toate drepturile rezervate.",
    disclaimer:
      "Acest site nu face parte din site-ul Facebook sau Meta Platforms, Inc. În plus, acest site NU este susținut de Facebook în niciun fel. FACEBOOK este o marcă înregistrată a META PLATFORMS, Inc.",
  },
};