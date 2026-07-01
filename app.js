const storeConfig = {
  announcement:
    "PREVENTA ABIERTA - Producción limitada en Alemania · Envíos y recogida en Berlín/Potsdam",
  preorderDates: [
    ["Cierre de preventa", "25 julio 2026"],
    ["Producción estimada", "Agosto 2026"],
    ["Entrega estimada", "Finales de agosto 2026"],
  ],
  shipping: 5.9,
  merchantEmail: "hola@ysisi26.com",
  blackEaglePrintMode: "A2",
  sizeGuide: [
    ["XS", "54 cm", "66 cm", "21 cm"],
    ["S", "56 cm", "68 cm", "22 cm"],
    ["M", "58 cm", "70 cm", "23 cm"],
    ["L", "60 cm", "72 cm", "24 cm"],
    ["XL", "63 cm", "74 cm", "25 cm"],
    ["XXL", "66 cm", "76 cm", "26 cm"],
  ],
};

const products = [
  {
    id: "chamarra-denim-aguila-26",
    name: "Chamarra denim - Águila 26",
    category: "hoodies",
    categoryLabel: "Hoodies y chamarras",
    preorder: 109.9,
    regular: 119.9,
    tag: "Edición limitada",
    image: "assets/products/chamarra-denim-aguila-26.png",
    colors: ["#f5efe3", "#174936", "#b9533a", "#c99a3a"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "La pieza insignia del primer drop. Chamarra crema con gráfico trasero de gran formato: águila, balón, nopal y el número 26. Al frente lleva el logotipo pequeño de ¿Y si sí?",
    story:
      "El águila funciona como emblema de orgullo y movimiento; el nopal y el balón aterrizan la pieza en esa mezcla de raíz mexicana y partido de barrio.",
  },
  {
    id: "hoodie-aguila-26",
    name: "Hoodie - Águila 26",
    category: "hoodies",
    categoryLabel: "Hoodies y chamarras",
    preorder: 99.9,
    regular: 104.9,
    tag: "Preventa",
    image: "assets/products/hoodie-aguila-26.png",
    colors: ["#f5efe3", "#174936", "#b9533a", "#c99a3a"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Hoodie de corte relajado con identidad mexicana y espíritu futbolero. Gráfico completo en espalda y logotipo discreto al frente.",
    story:
      "La composición de águila, sol, balón y nopales está pensada para noches largas de partido: cómoda, gráfica y con presencia.",
  },
  {
    id: "playera-cancha",
    name: "Playera oversized - Cancha",
    category: "playeras",
    categoryLabel: "Playeras",
    entry: 39.9,
    preorder: 44.9,
    regular: 49.9,
    tag: "Best seller",
    image: "assets/products/playera-cancha.png",
    colors: ["#f5efe3", "#174936", "#c99a3a"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Una cancha, un balón y una pregunta que todos conocemos. Playera oversized en color crema con emblema pequeño al frente y composición futbolera en la espalda.",
    story:
      "La cancha representa el punto de reunión: bar, parque, casa o estadio. El diseño mira al futbol como excusa para volver a encontrarnos.",
  },
  {
    id: "playera-minimal-26",
    name: "Playera oversized - Minimal 26",
    category: "playeras",
    categoryLabel: "Playeras",
    entry: 39.9,
    preorder: 44.9,
    regular: 49.9,
    tag: "Nuevo",
    image: "assets/products/playera-minimal-26.png",
    colors: ["#f5efe3", "#174936", "#b9533a", "#c99a3a"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "La versión más limpia de la colección. La frase ¿Y si sí? domina el frente y el número 26 aparece en la espalda con un nopal integrado.",
    story:
      "El número 26 se vuelve una señal de futuro. El nopal dentro del número recuerda que la esperanza también tiene raíz.",
  },
  {
    id: "playera-negra-aguila-26",
    name: "Playera oversized negra - Águila 26",
    category: "playeras",
    categoryLabel: "Playeras",
    entry: 59.9,
    preorder: 69.9,
    regular: 79.9,
    printMode: "A2 actual",
    priceAlternatives: {
      A3: { entry: 44.9, preorder: 54.9, regular: 59.9, label: "A3 confirmado" },
      A2: { entry: 59.9, preorder: 69.9, regular: 79.9, label: "A2 actual" },
    },
    tag: "Colorway especial",
    image: "assets/products/playera-negra-aguila-26.png",
    colors: ["#171717", "#f5efe3", "#174936", "#b9533a"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "La versión nocturna de la pieza principal. Playera negra oversized con detalles en crema, terracota, mostaza y verde.",
    story:
      "Pensada para verse potente de noche: el gráfico conserva la fuerza del águila y el contraste de una pieza de concierto o grada.",
  },
  {
    id: "jersey-retro-mexico-26",
    name: "Jersey retro - México 26",
    category: "playeras",
    categoryLabel: "Playeras",
    preorder: 69.9,
    regular: 74.9,
    tag: "Edición limitada",
    image: "assets/products/jersey-retro-mexico-26.png",
    colors: ["#f5efe3", "#174936", "#c99a3a"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Jersey inspirado en la estética del fútbol de otras décadas. Cuello y mangas en verde, emblema MEX 26 al frente y número de gran formato en la espalda.",
    story:
      "No es una camiseta oficial: es una interpretación original de nuestra cultura futbolera con guiños retro y silueta urbana.",
  },
  {
    id: "crewneck-minimal-26",
    name: "Crewneck - Minimal 26",
    category: "hoodies",
    categoryLabel: "Hoodies y chamarras",
    preorder: 79.9,
    regular: 84.9,
    tag: "Preventa",
    image: "assets/products/crewneck-minimal-26.png",
    colors: ["#f5efe3", "#174936", "#b9533a", "#c99a3a"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Sudadera de cuello redondo con la frase ¿Y si sí? al frente y el número 26 en la espalda. Cálida, limpia y versátil para el clima de Berlín.",
    story:
      "Una pieza para todos los días: la pregunta va al frente y la promesa del 26 queda en la espalda como dorsal propio.",
  },
  {
    id: "gorra-bordada",
    name: "Gorra bordada - ¿Y si sí?",
    category: "accesorios",
    categoryLabel: "Accesorios",
    preorder: 34.9,
    regular: 39.9,
    tag: "Nuevo",
    image: "assets/products/gorra-bordada.png",
    colors: ["#f5efe3", "#174936", "#b9533a"],
    sizes: ["Única"],
    description:
      "Gorra crema con visera verde y bordado frontal de ¿Y si sí? Incluye MEX 26 en el lateral y un pequeño detalle de águila en la parte posterior.",
    story:
      "El bordado vuelve la frase una insignia discreta para días de sol, traslados largos y reuniones de partido.",
  },
  {
    id: "tote-canvas-aguila-26",
    name: "Tote canvas - Águila 26",
    category: "accesorios",
    categoryLabel: "Accesorios",
    preorder: 39.9,
    regular: 44.9,
    tag: "Preventa",
    image: "assets/products/tote-canvas-aguila-26.png",
    colors: ["#f5efe3", "#174936", "#b9533a", "#c99a3a"],
    sizes: ["Única"],
    description:
      "Tote de canvas grueso con asas verdes. Tipografía minimalista en un lado y gráfico completo de Águila 26 en el otro.",
    story:
      "Funcional y gráfica por ambos lados, pensada para la vida diaria entre mercado, metro, universidad, oficina y watch party.",
  },
];

const faq = [
  [
    "¿Las prendas están disponibles inmediatamente?",
    "Algunas piezas pueden estar disponibles y otras funcionar bajo preventa. El estado aparecerá claramente en cada producto.",
  ],
  [
    "¿Cuánto tarda una preventa?",
    "El plazo se indica en cada drop y comienza después del cierre de pedidos.",
  ],
  [
    "¿Puedo cambiar la talla?",
    "Los cambios dependerán del estado de producción. Contacta a la marca lo antes posible.",
  ],
  [
    "¿Las prendas son unisex?",
    "Sí. La mayoría de las piezas utilizan cortes unisex u oversized.",
  ],
  [
    "¿Los diseños son oficiales?",
    "No. Son diseños originales inspirados en la cultura del fútbol mexicano y no representan a ninguna federación, selección o torneo oficial.",
  ],
  [
    "¿Puedo recoger mi pedido?",
    "Sí, la tienda contempla recogida local en Berlín/Potsdam cuando exista punto o evento confirmado.",
  ],
];

const currency = new Intl.NumberFormat("es-DE", {
  style: "currency",
  currency: "EUR",
});

const cartKey = "ysisi26-cart";
const languageKey = "ysisi26-language";
let cart = JSON.parse(localStorage.getItem(cartKey) || "[]");
let currentLang = localStorage.getItem(languageKey) || "es";
let currentProductId = null;
let selectedSize = null;
let selectedQty = 1;

const translations = {
  es: {
    announcement:
      "PREVENTA ABIERTA - Producción limitada en Alemania · Envíos y recogida en Berlín/Potsdam",
    metaDescription:
      "¿Y si sí? Drop 01 - México 26. Streetwear futbolero mexicano creado en Berlín.",
    title: "¿Y si sí? | Drop 01 - México 26",
    skip: "Saltar al contenido",
    nav: {
      collection: "Colección",
      shirts: "Playeras",
      hoodies: "Hoodies y chamarras",
      accessories: "Accesorios",
      story: "Nuestra historia",
      faq: "Preguntas",
      cart: "Carrito",
    },
    heroSubtitle: "Fútbol mexicano para llevar puesto.",
    heroText:
      "Una colección de streetwear creada en Berlín para quienes viven cada partido con esperanza, nervios, orgullo y corazón mexicano.",
    viewDrop: "Ver el drop",
    orderCta: "Hacer mi pedido",
    preorderOpen: "Preventa abierta",
    dropText:
      "Una cápsula inspirada en la cultura del fútbol mexicano, reinterpretada desde Berlín. Águilas, nopales, canchas y el número 26 se convierten en gráficos retro diseñados para usarse mucho después del último silbatazo.",
    lineup: "La alineación completa",
    search: "Buscar",
    searchPlaceholder: "Playera, gorra, águila...",
    category: "Categoría",
    size: "Talla",
    all: "Todo",
    allSizes: "Todas",
    categoryNames: {
      playeras: "Playeras",
      hoodies: "Hoodies y chamarras",
      accesorios: "Accesorios",
    },
    product: {
      view: "Ver producto",
      quickAdd: "Compra rápida",
      noResults: "No encontramos piezas con esos filtros. Prueba otra talla o categoría.",
      swatches: "Colores disponibles",
      preorderPrice: "Precio de preventa",
      status: "Preventa abierta. Esta pieza se fabricará después del cierre del pedido.",
      mockup: "Mockup de preventa: representación visual del producto final.",
      gallery: "Galería",
      frontBack: "Frente y espalda",
      front: "Frente",
      back: "Espalda",
      sizeGuide: "Guía de tallas",
      quantity: "Cantidad",
      preorderNow: "Preordenar ahora",
      quickInfo: [
        "Producción en Alemania.",
        "Diseño original, no oficial.",
        "Impresión frontal y trasera en piezas seleccionadas.",
        "Corte unisex y relajado.",
        "Envío o recogida local en Berlín/Potsdam.",
      ],
      designStory: "La historia del diseño",
      material: "Material",
      materialText:
        "Algodón de gramaje medio-alto, tacto suave y estructura amplia. La composición final puede variar ligeramente según el modelo seleccionado para producción.",
      print: "Técnica de impresión",
      printText:
        "Estampado textil de alta calidad preparado para mantener colores sólidos y líneas definidas.",
      care: "Cuidados",
      careItems: [
        "Lavar del revés a máximo 30 °C.",
        "No utilizar blanqueador.",
        "No planchar directamente sobre el estampado.",
        "Evitar secadora para prolongar la vida del diseño.",
      ],
    },
    tags: {
      "Edición limitada": "Edición limitada",
      Preventa: "Preventa",
      "Best seller": "Best seller",
      Nuevo: "Nuevo",
      "Colorway especial": "Colorway especial",
    },
    preorderDates: [
      ["Cierre de preventa", "25 julio 2026"],
      ["Producción estimada", "Agosto 2026"],
      ["Entrega estimada", "Finales de agosto 2026"],
    ],
    preorderTitle: "Tú la pides. Nosotros la hacemos.",
    preorderText:
      "Producimos en cantidades limitadas para evitar sobreinventario y fabricar únicamente las prendas que realmente quiere la comunidad.",
    steps: [
      ["Elige tu pieza", "Selecciona diseño, talla y cantidad."],
      ["Confirma tu pedido", "Paga de forma segura y recibe confirmación por correo."],
      ["Producimos el drop", "Al cerrar la preventa enviamos todas las piezas a producción."],
      ["Recibe tu pedido", "Te avisamos cuando esté listo para envío o recogida en Berlín/Potsdam."],
    ],
    story: {
      eyebrow: "Nuestra historia",
      title: "Una pregunta que nunca dejamos de hacernos",
      paragraphs: [
        "¿Y si sí? nació entre México y Berlín, pensando en esa mezcla de esperanza, nervios y emoción que aparece cada vez que juega nuestra selección.",
        "Queríamos crear algo que no pareciera mercancía oficial ni souvenir turístico. Una colección que hablara de fútbol mexicano desde el diseño, la moda y la identidad.",
        "Cada pieza está pensada para quienes cantan desde lejos, organizan partidos en otra ciudad, celebran sus raíces y siguen creyendo hasta el último minuto.",
      ],
      close: "No sabemos cómo terminará el partido. Pero sabemos cómo queremos vivirlo.",
    },
    community: {
      eyebrow: "Comunidad",
      title: "De México para la cancha de Berlín",
      cta: "Etiquétanos en tu look",
    },
    faqTitle: "Antes del silbatazo",
    faqEyebrow: "Preguntas frecuentes",
    faq: [
      [
        "¿Las prendas están disponibles inmediatamente?",
        "Algunas piezas pueden estar disponibles y otras funcionar bajo preventa. El estado aparecerá claramente en cada producto.",
      ],
      ["¿Cuánto tarda una preventa?", "El plazo se indica en cada drop y comienza después del cierre de pedidos."],
      ["¿Puedo cambiar la talla?", "Los cambios dependerán del estado de producción. Contacta a la marca lo antes posible."],
      ["¿Las prendas son unisex?", "Sí. La mayoría de las piezas utilizan cortes unisex u oversized."],
      [
        "¿Los diseños son oficiales?",
        "No. Son diseños originales inspirados en la cultura del fútbol mexicano y no representan a ninguna federación, selección o torneo oficial.",
      ],
      ["¿Puedo recoger mi pedido?", "Sí, la tienda contempla recogida local en Berlín/Potsdam cuando exista punto o evento confirmado."],
    ],
    newsletterTitle: "Nos vemos en la cancha.",
    newsletterButton: "Suscribirme",
    newsletterAlert: "Listo. Te avisaremos cuando el drop entre a la cancha.",
    footerText: "Creado entre México y Berlín. Hecho para quienes todavía creen.",
    cart: {
      title: "Carrito",
      empty: "Tu carrito está listo para el primer fichaje.",
      size: "Talla",
      preorder: "Preventa",
      quantity: "Cantidad",
      remove: "Eliminar",
      subtract: "Restar",
      add: "Sumar",
      note:
        "Los productos de preventa y los disponibles inmediatamente pueden enviarse juntos cuando todo el pedido esté listo.",
      subtotal: "Subtotal",
      shipping: "Envío estimado",
      total: "Total",
      checkout: "Finalizar pedido",
    },
    checkout: {
      title: "Finalizar pedido",
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono opcional",
      address: "Dirección",
      city: "Ciudad",
      postal: "Código postal",
      country: "País",
      delivery: "Método de entrega",
      payment: "Método de pago",
      coupon: "Código de descuento",
      comments: "Comentarios",
      submit: "Confirmar pedido",
      summary: "Total del pedido",
      summaryNote:
        "Precio mostrado con impuestos aplicables. El coste final de envío se confirma antes del pago.",
      mailNote:
        "Al confirmar se abrirá un correo con el resumen del pedido para enviarlo a la tienda.",
      success:
        "¡Tu pedido ya está en la cancha! Se preparó un correo con todos los detalles para enviarlo a la tienda.",
      deliveryOptions: [
        ["germany", "Envío dentro de Alemania"],
        ["international", "Envío internacional"],
        ["pickup", "Recogida en Berlín/Potsdam"],
        ["event", "Entrega en evento o watch party"],
      ],
      paymentOptions: [
        ["card", "Tarjeta"],
        ["paypal", "PayPal"],
        ["bank", "Transferencia bancaria"],
      ],
      cash: ["cash", "Efectivo al recoger / entrega en persona"],
    },
  },
  de: {
    announcement:
      "VORBESTELLUNG GEÖFFNET - Limitierte Produktion in Deutschland · Versand und Abholung in Berlin/Potsdam",
    metaDescription:
      "¿Y si sí? Drop 01 - México 26. Mexikanischer Fußball-Streetwear aus Berlin.",
    title: "¿Y si sí? | Drop 01 - México 26",
    skip: "Zum Inhalt springen",
    nav: {
      collection: "Kollektion",
      shirts: "T-Shirts",
      hoodies: "Hoodies & Jacken",
      accessories: "Accessoires",
      story: "Unsere Geschichte",
      faq: "Fragen",
      cart: "Warenkorb",
    },
    heroSubtitle: "Mexikanischer Fußball zum Anziehen.",
    heroText:
      "Eine Streetwear-Kollektion aus Berlin für alle, die jedes Spiel mit Hoffnung, Nervosität, Stolz und mexikanischem Herz erleben.",
    viewDrop: "Drop ansehen",
    orderCta: "Bestellen",
    preorderOpen: "Vorbestellung offen",
    dropText:
      "Eine Capsule, inspiriert von mexikanischer Fußballkultur und neu interpretiert in Berlin. Adler, Nopales, Spielfelder und die Zahl 26 werden zu Retro-Grafiken, die lange nach dem Abpfiff bleiben.",
    lineup: "Die komplette Aufstellung",
    search: "Suchen",
    searchPlaceholder: "T-Shirt, Cap, Adler...",
    category: "Kategorie",
    size: "Größe",
    all: "Alles",
    allSizes: "Alle",
    categoryNames: {
      playeras: "T-Shirts",
      hoodies: "Hoodies & Jacken",
      accesorios: "Accessoires",
    },
    tags: {
      "Edición limitada": "Limitierte Edition",
      Preventa: "Vorbestellung",
      "Best seller": "Bestseller",
      Nuevo: "Neu",
      "Colorway especial": "Spezialfarbe",
    },
    product: {
      view: "Produkt ansehen",
      quickAdd: "Schnell kaufen",
      noResults: "Keine passenden Stücke gefunden. Probiere eine andere Größe oder Kategorie.",
      swatches: "Verfügbare Farben",
      preorderPrice: "Vorbestellpreis",
      status: "Vorbestellung offen. Dieses Stück wird nach Bestellschluss produziert.",
      mockup: "Vorbestellungs-Mockup: visuelle Darstellung des finalen Produkts.",
      gallery: "Galerie",
      frontBack: "Vorne und hinten",
      front: "Vorne",
      back: "Hinten",
      sizeGuide: "Größentabelle",
      quantity: "Menge",
      preorderNow: "Jetzt vorbestellen",
      quickInfo: [
        "Produktion in Deutschland.",
        "Originales, nicht offizielles Design.",
        "Front- und Rückendruck bei ausgewählten Teilen.",
        "Unisex und lockerer Schnitt.",
        "Versand oder lokale Abholung in Berlin/Potsdam.",
      ],
      designStory: "Die Geschichte des Designs",
      material: "Material",
      materialText:
        "Mittelschweres bis schweres Baumwollgefühl mit weichem Griff und weiter Struktur. Die finale Zusammensetzung kann je nach Produktionsmodell leicht variieren.",
      print: "Drucktechnik",
      printText:
        "Hochwertiger Textildruck, vorbereitet für kräftige Farben und klare Linien.",
      care: "Pflege",
      careItems: [
        "Auf links bei maximal 30 °C waschen.",
        "Kein Bleichmittel verwenden.",
        "Nicht direkt über den Druck bügeln.",
        "Trockner vermeiden, damit das Design länger hält.",
      ],
    },
    preorderDates: [
      ["Ende der Vorbestellung", "25. Juli 2026"],
      ["Voraussichtliche Produktion", "August 2026"],
      ["Voraussichtliche Lieferung", "Ende August 2026"],
    ],
    preorderTitle: "Du bestellst. Wir produzieren.",
    preorderText:
      "Wir produzieren in kleinen Mengen, um Überbestand zu vermeiden und nur die Teile herzustellen, die die Community wirklich will.",
    steps: [
      ["Wähle dein Teil", "Wähle Design, Größe und Menge."],
      ["Bestellung bestätigen", "Bezahle sicher und erhalte eine Bestätigung per E-Mail."],
      ["Wir produzieren den Drop", "Nach Ende der Vorbestellung geht alles in Produktion."],
      ["Erhalte deine Bestellung", "Wir melden uns, wenn sie versandbereit oder abholbereit ist."],
    ],
    story: {
      eyebrow: "Unsere Geschichte",
      title: "Eine Frage, die wir uns immer wieder stellen",
      paragraphs: [
        "¿Y si sí? entstand zwischen Mexiko und Berlin, aus diesem Mix aus Hoffnung, Nervosität und Emotion, der jedes Spiel begleitet.",
        "Wir wollten etwas schaffen, das weder offizieller Fanartikel noch touristisches Souvenir ist. Eine Kollektion über mexikanischen Fußball, Design, Mode und Identität.",
        "Jedes Teil ist für Menschen gedacht, die aus der Ferne singen, Spiele in einer anderen Stadt organisieren, ihre Wurzeln feiern und bis zur letzten Minute daran glauben.",
      ],
      close: "Wir wissen nicht, wie das Spiel endet. Aber wir wissen, wie wir es leben wollen.",
    },
    community: {
      eyebrow: "Community",
      title: "Von Mexiko auf den Berliner Platz",
      cta: "Markiere uns in deinem Look",
    },
    faqEyebrow: "Häufige Fragen",
    faqTitle: "Vor dem Anpfiff",
    faq: [
      ["Sind die Teile sofort verfügbar?", "Einige Teile können verfügbar sein, andere laufen über Vorbestellung. Der Status steht bei jedem Produkt."],
      ["Wie lange dauert eine Vorbestellung?", "Der Zeitraum wird je Drop angegeben und beginnt nach Bestellschluss."],
      ["Kann ich die Größe ändern?", "Änderungen hängen vom Produktionsstatus ab. Kontaktiere die Marke so früh wie möglich."],
      ["Sind die Teile unisex?", "Ja. Die meisten Stücke haben unisex oder oversized Schnitte."],
      ["Sind die Designs offiziell?", "Nein. Es sind originale Designs, inspiriert von mexikanischer Fußballkultur; sie vertreten keinen Verband, kein Team und kein offizielles Turnier."],
      ["Kann ich meine Bestellung abholen?", "Ja, lokale Abholung in Berlin/Potsdam ist möglich, sobald ein Punkt oder Event bestätigt ist."],
    ],
    newsletterTitle: "Wir sehen uns auf dem Platz.",
    newsletterButton: "Abonnieren",
    newsletterAlert: "Fertig. Wir melden uns, wenn der Drop aufs Feld kommt.",
    footerText: "Entstanden zwischen Mexiko und Berlin. Gemacht für alle, die weiter glauben.",
    cart: {
      title: "Warenkorb",
      empty: "Dein Warenkorb ist bereit für den ersten Treffer.",
      size: "Größe",
      preorder: "Vorbestellung",
      quantity: "Menge",
      remove: "Entfernen",
      subtract: "Minus",
      add: "Plus",
      note:
        "Vorbestellte und sofort verfügbare Produkte können zusammen versendet werden, sobald alles bereit ist.",
      subtotal: "Zwischensumme",
      shipping: "Geschätzter Versand",
      total: "Gesamt",
      checkout: "Zur Kasse",
    },
    checkout: {
      title: "Bestellung abschließen",
      name: "Vollständiger Name",
      email: "E-Mail",
      phone: "Telefon optional",
      address: "Adresse",
      city: "Stadt",
      postal: "Postleitzahl",
      country: "Land",
      delivery: "Liefermethode",
      payment: "Zahlungsmethode",
      coupon: "Rabattcode",
      comments: "Kommentare",
      submit: "Bestellung bestätigen",
      summary: "Bestellsumme",
      summaryNote:
        "Preise inkl. anwendbarer Steuern. Finale Versandkosten werden vor der Zahlung bestätigt.",
      mailNote:
        "Beim Bestätigen öffnet sich eine E-Mail mit der Bestellübersicht an den Shop.",
      success:
        "Deine Bestellung ist auf dem Platz! Eine E-Mail mit allen Details wurde für den Shop vorbereitet.",
      deliveryOptions: [
        ["germany", "Versand innerhalb Deutschlands"],
        ["international", "Internationaler Versand"],
        ["pickup", "Abholung in Berlin/Potsdam"],
        ["event", "Übergabe bei Event oder Watch Party"],
      ],
      paymentOptions: [
        ["card", "Karte"],
        ["paypal", "PayPal"],
        ["bank", "Banküberweisung"],
      ],
      cash: ["cash", "Barzahlung bei Abholung / persönlicher Übergabe"],
    },
  },
  en: {
    announcement:
      "PREORDER OPEN - Limited production in Germany · Shipping and pickup in Berlin/Potsdam",
    metaDescription:
      "¿Y si sí? Drop 01 - México 26. Mexican football streetwear created in Berlin.",
    title: "¿Y si sí? | Drop 01 - México 26",
    skip: "Skip to content",
    nav: {
      collection: "Collection",
      shirts: "T-shirts",
      hoodies: "Hoodies & jackets",
      accessories: "Accessories",
      story: "Our story",
      faq: "Questions",
      cart: "Cart",
    },
    heroSubtitle: "Mexican football you can wear.",
    heroText:
      "A streetwear collection created in Berlin for everyone who lives every match with hope, nerves, pride and a Mexican heart.",
    viewDrop: "View the drop",
    orderCta: "Place my order",
    preorderOpen: "Preorder open",
    dropText:
      "A capsule inspired by Mexican football culture, reinterpreted from Berlin. Eagles, nopales, pitches and the number 26 become retro graphics made to live far beyond the final whistle.",
    lineup: "The full lineup",
    search: "Search",
    searchPlaceholder: "T-shirt, cap, eagle...",
    category: "Category",
    size: "Size",
    all: "All",
    allSizes: "All",
    categoryNames: {
      playeras: "T-shirts",
      hoodies: "Hoodies & jackets",
      accesorios: "Accessories",
    },
    tags: {
      "Edición limitada": "Limited edition",
      Preventa: "Preorder",
      "Best seller": "Best seller",
      Nuevo: "New",
      "Colorway especial": "Special colorway",
    },
    product: {
      view: "View product",
      quickAdd: "Quick add",
      noResults: "No pieces match those filters. Try another size or category.",
      swatches: "Available colors",
      preorderPrice: "Preorder price",
      status: "Preorder open. This piece will be produced after the order window closes.",
      mockup: "Preorder mockup: visual representation of the final product.",
      gallery: "Gallery",
      frontBack: "Front and back",
      front: "Front",
      back: "Back",
      sizeGuide: "Size guide",
      quantity: "Quantity",
      preorderNow: "Preorder now",
      quickInfo: [
        "Produced in Germany.",
        "Original, unofficial design.",
        "Front and back print on selected pieces.",
        "Unisex relaxed fit.",
        "Shipping or local pickup in Berlin/Potsdam.",
      ],
      designStory: "The story behind the design",
      material: "Material",
      materialText:
        "Medium-heavy cotton feel, soft touch and relaxed structure. Final composition may vary slightly depending on the selected production model.",
      print: "Print technique",
      printText:
        "High-quality textile print prepared to keep colors solid and lines defined.",
      care: "Care",
      careItems: [
        "Wash inside out at max 30 °C.",
        "Do not bleach.",
        "Do not iron directly over the print.",
        "Avoid tumble drying to extend the life of the design.",
      ],
    },
    preorderDates: [
      ["Preorder closes", "July 25, 2026"],
      ["Estimated production", "August 2026"],
      ["Estimated delivery", "Late August 2026"],
    ],
    preorderTitle: "You order it. We make it.",
    preorderText:
      "We produce in limited quantities to avoid overstock and make only the pieces the community really wants.",
    steps: [
      ["Choose your piece", "Select design, size and quantity."],
      ["Confirm your order", "Pay securely and receive confirmation by email."],
      ["We produce the drop", "After preorder closes, every piece goes into production."],
      ["Receive your order", "We will let you know when it is ready to ship or pick up."],
    ],
    story: {
      eyebrow: "Our story",
      title: "A question we never stop asking",
      paragraphs: [
        "¿Y si sí? was born between Mexico and Berlin, from that mix of hope, nerves and emotion that appears whenever our team plays.",
        "We wanted to create something that did not feel like official merch or a tourist souvenir. A collection about Mexican football through design, fashion and identity.",
        "Each piece is made for people who sing from far away, organize matches in another city, celebrate their roots and keep believing until the last minute.",
      ],
      close: "We do not know how the match will end. But we know how we want to live it.",
    },
    community: {
      eyebrow: "Community",
      title: "From Mexico to Berlin's pitch",
      cta: "Tag us in your look",
    },
    faqEyebrow: "FAQ",
    faqTitle: "Before kickoff",
    faq: [
      ["Are the pieces available right away?", "Some pieces may be available immediately and others may be preorder. The status is shown on each product."],
      ["How long does preorder take?", "The timeline is shown for each drop and starts after the order window closes."],
      ["Can I change my size?", "Changes depend on production status. Contact the brand as soon as possible."],
      ["Are the pieces unisex?", "Yes. Most pieces use unisex or oversized cuts."],
      ["Are the designs official?", "No. They are original designs inspired by Mexican football culture and do not represent any federation, team or official tournament."],
      ["Can I pick up my order?", "Yes, local pickup in Berlin/Potsdam is available when a point or event is confirmed."],
    ],
    newsletterTitle: "See you on the pitch.",
    newsletterButton: "Subscribe",
    newsletterAlert: "Done. We will let you know when the drop enters the pitch.",
    footerText: "Created between Mexico and Berlin. Made for those who still believe.",
    cart: {
      title: "Cart",
      empty: "Your cart is ready for the first signing.",
      size: "Size",
      preorder: "Preorder",
      quantity: "Quantity",
      remove: "Remove",
      subtract: "Subtract",
      add: "Add",
      note:
        "Preorder products and immediately available products can ship together when the full order is ready.",
      subtotal: "Subtotal",
      shipping: "Estimated shipping",
      total: "Total",
      checkout: "Checkout",
    },
    checkout: {
      title: "Checkout",
      name: "Full name",
      email: "Email",
      phone: "Phone optional",
      address: "Address",
      city: "City",
      postal: "Postal code",
      country: "Country",
      delivery: "Delivery method",
      payment: "Payment method",
      coupon: "Discount code",
      comments: "Order notes",
      submit: "Confirm order",
      summary: "Order total",
      summaryNote:
        "Prices shown with applicable taxes. Final shipping cost is confirmed before payment.",
      mailNote:
        "When you confirm, an email with the order summary will open for sending to the shop.",
      success:
        "Your order is on the pitch! An email with all details was prepared for the shop.",
      deliveryOptions: [
        ["germany", "Shipping within Germany"],
        ["international", "International shipping"],
        ["pickup", "Pickup in Berlin/Potsdam"],
        ["event", "Event or watch party handoff"],
      ],
      paymentOptions: [
        ["card", "Card"],
        ["paypal", "PayPal"],
        ["bank", "Bank transfer"],
      ],
      cash: ["cash", "Cash on pickup / in-person delivery"],
    },
  },
};

const campaignCopy = {
  es: {
    dropName: "DROP 01 - YA FUE SÍ",
    eyebrow: "Campaña",
    title: "¿Y si sí? Ya fue sí.",
    copy:
      "El marcador termina. La historia no. Tres playeras para guardar el Mundial que nos hizo volver a creer.",
    cta: "Reserva la tuya",
    secondary: "Lleva puesta la historia",
    stats: ["9 de 9", "40 años", "Ya fue sí"],
    manifestoTitle:
      "El marcador podrá cambiar el camino. No puede borrar la historia.",
    manifesto:
      "No estamos vendiendo una predicción. Estamos guardando un recuerdo: la forma en que una comunidad volvió a creer junta.",
  },
  de: {
    dropName: "DROP 01 - YA FUE SÍ",
    eyebrow: "Kampagne",
    title: "¿Y si sí? Es war schon ein Ja.",
    copy:
      "Der Spielstand endet. Die Geschichte nicht. Drei T-Shirts für die WM, die uns wieder glauben ließ.",
    cta: "Reservieren",
    secondary: "Trage die Geschichte",
    stats: ["9 von 9", "40 Jahre", "Ya fue sí"],
    manifestoTitle:
      "Der Spielstand kann den Weg verändern. Er kann die Geschichte nicht löschen.",
    manifesto:
      "Wir verkaufen keine Vorhersage. Wir bewahren eine Erinnerung: den Moment, in dem eine Community wieder gemeinsam geglaubt hat.",
  },
  en: {
    dropName: "DROP 01 - YA FUE SÍ",
    eyebrow: "Campaign",
    title: "¿Y si sí? It already was.",
    copy:
      "The score ends. The story does not. Three T-shirts to keep the World Cup that made us believe again.",
    cta: "Reserve yours",
    secondary: "Wear the story",
    stats: ["9 of 9", "40 years", "Ya fue sí"],
    manifestoTitle:
      "The score can change the path. It cannot erase the story.",
    manifesto:
      "We are not selling a prediction. We are preserving a memory: the way a community started believing together again.",
  },
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const getProduct = (id) => products.find((product) => product.id === id);
const ui = () => translations[currentLang] || translations.es;

function saveCart() {
  localStorage.setItem(cartKey, JSON.stringify(cart));
}

function formatPrice(value) {
  return currency.format(value).replace(/\s/g, " ");
}

function productCategory(product) {
  return ui().categoryNames[product.category] || product.categoryLabel;
}

function productTag(product) {
  return ui().tags[product.tag] || product.tag;
}

function activeProduct(product) {
  if (product.id !== "playera-negra-aguila-26" || !product.priceAlternatives) {
    return product;
  }
  const mode = product.priceAlternatives[storeConfig.blackEaglePrintMode] ? storeConfig.blackEaglePrintMode : "A2";
  const prices = product.priceAlternatives[mode];
  return {
    ...product,
    entry: prices.entry,
    preorder: prices.preorder,
    regular: prices.regular,
    printMode: prices.label,
  };
}

function isInPersonDelivery(value) {
  return value === "pickup" || value === "event";
}

function isEntryTier(deliveryMethod = null, paymentMethod = null) {
  const deliveryValue = deliveryMethod || $('[name="delivery"]')?.value;
  const paymentValue = paymentMethod || $('[name="payment"]')?.value;
  return isInPersonDelivery(deliveryValue) && paymentValue === "cash";
}

function itemUnitPrice(item, deliveryMethod = null, paymentMethod = null) {
  const product = activeProduct(getProduct(item.productId));
  if (isEntryTier(deliveryMethod, paymentMethod) && product.entry) return product.entry;
  return product.preorder;
}

function itemTierLabel(deliveryMethod = null, paymentMethod = null) {
  return isEntryTier(deliveryMethod, paymentMethod)
    ? currentLang === "de"
      ? "Event/Barpreis"
      : currentLang === "en"
        ? "Event cash price"
        : "Entrada evento efectivo"
    : ui().cart.preorder;
}

function renderStaticContent() {
  const copy = ui();
  document.documentElement.lang = currentLang;
  document.title = copy.title;
  $('meta[name="description"]').setAttribute("content", copy.metaDescription);
  $(".language").value = currentLang.toUpperCase();
  $("[data-announcement]").textContent = copy.announcement;
  $("[data-preorder-dates]").innerHTML = storeConfig.preorderDates
    .map((_, index) => copy.preorderDates[index])
    .map(([label, value]) => `<div><strong>${value}</strong><span>${label}</span></div>`)
    .join("");
  $("[data-size-table]").innerHTML = storeConfig.sizeGuide
    .map(
      ([size, chest, length, sleeve]) =>
        `<tr><td>${size}</td><td>${chest}</td><td>${length}</td><td>${sleeve}</td></tr>`,
    )
    .join("");
  $("[data-faq]").innerHTML = faq
    .map((_, index) => copy.faq[index])
    .map(
      ([question, answer]) =>
        `<details><summary>${question}</summary><p>${answer}</p></details>`,
    )
    .join("");
  applyStaticTranslations();
  renderDeliveryOptions();
}

function setText(selector, text) {
  const element = $(selector);
  if (element) element.textContent = text;
}

function setPlaceholder(selector, text) {
  const element = $(selector);
  if (element) element.setAttribute("placeholder", text);
}

function applyStaticTranslations() {
  const copy = ui();
  const campaign = campaignCopy[currentLang] || campaignCopy.es;
  setText(".skip-link", copy.skip);
  setText('.nav-menu a[href="#drop"]', copy.nav.collection);
  setText('[data-nav-category="playeras"]', copy.nav.shirts);
  setText('[data-nav-category="hoodies"]', copy.nav.hoodies);
  setText('[data-nav-category="accesorios"]', copy.nav.accessories);
  setText('.nav-menu a[href="#historia"]', copy.nav.story);
  setText('.nav-menu a[href="#preguntas"]', copy.nav.faq);
  const cartButton = $("[data-open-cart]");
  if (cartButton) cartButton.childNodes[0].nodeValue = `${copy.nav.cart} `;

  setText(".hero-subtitle", copy.heroSubtitle);
  const heroParagraphs = $$(".hero-copy > p");
  if (heroParagraphs[2]) heroParagraphs[2].textContent = copy.heroText;
  setText(".hero-actions .primary", copy.viewDrop);
  setText(".hero-actions .secondary", copy.orderCta);

  setText(".drop-intro .eyebrow", copy.preorderOpen);
  setText(".drop-intro h2", campaign.dropName);
  const dropParagraph = $(".drop-intro .two-column > p");
  if (dropParagraph) dropParagraph.textContent = copy.dropText;
  renderCampaignContent();

  setText(".catalog .section-heading .eyebrow", copy.lineup);
  setText('label span', copy.search);
  const filterLabels = $$(".filters label span");
  if (filterLabels[0]) filterLabels[0].textContent = copy.search;
  if (filterLabels[1]) filterLabels[1].textContent = copy.category;
  if (filterLabels[2]) filterLabels[2].textContent = copy.size;
  setPlaceholder("[data-search]", copy.searchPlaceholder);
  const categoryOptions = $$("[data-category] option");
  if (categoryOptions[0]) categoryOptions[0].textContent = copy.all;
  if (categoryOptions[1]) categoryOptions[1].textContent = copy.categoryNames.playeras;
  if (categoryOptions[2]) categoryOptions[2].textContent = copy.categoryNames.hoodies;
  if (categoryOptions[3]) categoryOptions[3].textContent = copy.categoryNames.accesorios;
  const sizeOption = $('[data-size-filter] option[value="all"]');
  if (sizeOption) sizeOption.textContent = copy.allSizes;

  setText(".preorder .eyebrow", currentLang === "es" ? "Cómo funciona la preventa" : currentLang === "de" ? "So funktioniert die Vorbestellung" : "How preorder works");
  setText(".preorder h2", copy.preorderTitle);
  const preorderIntro = $(".preorder .section-heading > p");
  if (preorderIntro) preorderIntro.textContent = copy.preorderText;
  $$(".steps article").forEach((article, index) => {
    const step = copy.steps[index];
    if (!step) return;
    const heading = $("h3", article);
    const paragraph = $("p", article);
    if (heading) heading.textContent = step[0];
    if (paragraph) paragraph.textContent = step[1];
  });

  setText(".story-copy .eyebrow", copy.story.eyebrow);
  setText(".story-copy h2", copy.story.title);
  const storyParagraphs = $$(".story-copy p:not(.eyebrow)");
  storyParagraphs.forEach((paragraph, index) => {
    if (copy.story.paragraphs[index]) paragraph.textContent = copy.story.paragraphs[index];
  });
  setText(".story-copy strong", copy.story.close);

  setText(".community .eyebrow", copy.community.eyebrow);
  setText(".community h2", copy.community.title);
  setText(".community .btn", copy.community.cta);
  setText(".faq .eyebrow", copy.faqEyebrow);
  setText(".faq h2", copy.faqTitle);
  setText(".newsletter .eyebrow", "Newsletter");
  setText(".newsletter h2", copy.newsletterTitle);
  setText(".newsletter button", copy.newsletterButton);
  setText(".footer p", copy.footerText);
  setText("#cart-title", copy.cart.title);
  setText(".cart-note", copy.cart.note);
  setText("[data-open-checkout]", copy.cart.checkout);
  setText(".size-dialog h2", copy.product.sizeGuide);
  const sizeDialogParagraph = $(".size-dialog > p");
  if (sizeDialogParagraph) {
    sizeDialogParagraph.textContent =
      currentLang === "es"
        ? "Esta prenda tiene corte oversized. Elige tu talla habitual para un ajuste amplio o una talla menos para un ajuste más clásico."
        : currentLang === "de"
          ? "Dieses Teil hat einen oversized Schnitt. Wähle deine normale Größe für einen lockeren Fit oder eine Größe kleiner für einen klassischeren Sitz."
          : "This piece has an oversized fit. Choose your usual size for a relaxed fit or one size down for a more classic fit.";
  }
  applyCheckoutLabels();
}

function renderCampaignContent() {
  const campaign = campaignCopy[currentLang] || campaignCopy.es;
  setText("[data-campaign-eyebrow]", campaign.eyebrow);
  setText("[data-campaign-title]", campaign.title);
  setText("[data-campaign-copy]", campaign.copy);
  setText("[data-campaign-cta]", campaign.cta);
  setText("[data-campaign-secondary]", campaign.secondary);
  setText("[data-campaign-stat-one]", campaign.stats[0]);
  setText("[data-campaign-stat-two]", campaign.stats[1]);
  setText("[data-campaign-stat-three]", campaign.stats[2]);
  setText("[data-manifesto-title]", campaign.manifestoTitle);
  setText("[data-manifesto-copy]", campaign.manifesto);
}

function applyCheckoutLabels() {
  const copy = ui().checkout;
  setText(".checkout-form .eyebrow", "Checkout");
  setText(".checkout-form h2", copy.title);
  const labels = $$(".checkout-form label");
  const labelTexts = [
    copy.name,
    copy.email,
    copy.phone,
    copy.address,
    copy.city,
    copy.postal,
    copy.country,
    copy.delivery,
    copy.payment,
    copy.coupon,
    copy.comments,
  ];
  labels.forEach((label, index) => {
    const control = $("input, select, textarea", label);
    if (!control || !labelTexts[index]) return;
    label.childNodes[0].nodeValue = labelTexts[index];
  });
  const country = $('[name="country"]');
  if (country && ["Alemania", "Deutschland", "Germany"].includes(country.value)) {
    country.value = currentLang === "de" ? "Deutschland" : currentLang === "en" ? "Germany" : "Alemania";
  }
  setText('.checkout-form button[type="submit"]', copy.submit);
  setText("[data-order-success]", copy.success);
}

function renderDeliveryOptions() {
  const delivery = $('[name="delivery"]');
  if (!delivery) return;
  const previous = delivery.value || "germany";
  delivery.innerHTML = ui().checkout.deliveryOptions
    .map(([value, label]) => `<option value="${value}">${label}</option>`)
    .join("");
  delivery.value = ui().checkout.deliveryOptions.some(([value]) => value === previous)
    ? previous
    : "germany";
  renderPaymentOptions();
}

function renderPaymentOptions() {
  const payment = $('[name="payment"]');
  const delivery = $('[name="delivery"]');
  if (!payment || !delivery) return;
  const previous = payment.value || "card";
  const options = [...ui().checkout.paymentOptions];
  if (isInPersonDelivery(delivery.value)) options.push(ui().checkout.cash);
  payment.innerHTML = options
    .map(([value, label]) => `<option value="${value}">${label}</option>`)
    .join("");
  payment.value = options.some(([value]) => value === previous) ? previous : options[0][0];
  renderCart();
}

function renderProducts() {
  const search = $("[data-search]").value.trim().toLowerCase();
  const category = $("[data-category]").value;
  const size = $("[data-size-filter]").value;
  const copy = ui();
  const list = products.filter((product) => {
    const matchesSearch =
      !search ||
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.tag.toLowerCase().includes(search);
    const matchesCategory = category === "all" || product.category === category;
    const matchesSize = size === "all" || product.sizes.includes(size);
    return matchesSearch && matchesCategory && matchesSize;
  });

  $("[data-products]").innerHTML = list
    .map(
      (rawProduct) => {
        const product = activeProduct(rawProduct);
        return `
        <article class="product-card" id="${product.category === "playeras" ? "playeras" : product.category === "hoodies" ? "hoodies" : "accesorios"}-${product.id}">
          <figure>
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </figure>
          <div class="product-card-body">
            <div class="product-meta">
              <div>
                <p class="eyebrow">${productCategory(product)}</p>
                <h3>${product.name}</h3>
              </div>
              <span class="tag">${productTag(product)}</span>
            </div>
            <div class="prices">
              ${product.entry ? `<span class="entry-price">${formatPrice(product.entry)} ${itemTierLabel("pickup", "cash")}</span>` : ""}
              <span class="preorder-price">${formatPrice(product.preorder)}</span>
              <span class="regular-price">${formatPrice(product.regular)}</span>
            </div>
            ${product.printMode ? `<p class="price-note">${product.printMode}</p>` : ""}
            <div class="swatches" aria-label="${copy.product.swatches}">
              ${product.colors
                .map((color) => `<span class="swatch" style="background:${color}"></span>`)
                .join("")}
            </div>
            <div class="product-actions">
              <button class="btn primary" type="button" data-open-product="${product.id}">${copy.product.view}</button>
              <button class="btn secondary" type="button" data-quick-add="${product.id}">${copy.product.quickAdd}</button>
            </div>
          </div>
        </article>
      `;
      },
    )
    .join("");

  if (!list.length) {
    $("[data-products]").innerHTML =
      `<p class="state">${copy.product.noResults}</p>`;
  }
}

function addToCart(productId, size, qty = 1) {
  const product = activeProduct(getProduct(productId));
  const key = `${productId}-${size}`;
  const existing = cart.find((item) => item.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ key, productId, size, qty, price: product.preorder, type: "Preventa" });
  }
  saveCart();
  renderCart();
  openCart();
}

function cartTotals(deliveryMethod = null, paymentMethod = null) {
  const subtotal = cart.reduce(
    (sum, item) => sum + itemUnitPrice(item, deliveryMethod, paymentMethod) * item.qty,
    0,
  );
  const deliveryValue = deliveryMethod || $('[name="delivery"]')?.value;
  const shipping = cart.length && !isInPersonDelivery(deliveryValue) ? storeConfig.shipping : 0;
  return { subtotal, shipping, total: subtotal + shipping };
}

function renderCart() {
  const copy = ui();
  $("[data-cart-count]").textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  const itemsContainer = $("[data-cart-items]");
  if (!cart.length) {
    itemsContainer.innerHTML = `<p class="state">${copy.cart.empty}</p>`;
  } else {
    itemsContainer.innerHTML = cart
      .map((item) => {
        const product = activeProduct(getProduct(item.productId));
        const unitPrice = itemUnitPrice(item);
        return `
          <article class="cart-row">
            <img src="${product.image}" alt="${product.name}" />
            <div>
              <h3>${product.name}</h3>
              <p>${copy.cart.size} ${item.size} · ${itemTierLabel()}</p>
              <p>${formatPrice(unitPrice)}</p>
              <div class="qty-control" aria-label="${copy.cart.quantity}">
                <button type="button" data-cart-dec="${item.key}" aria-label="${copy.cart.subtract}">−</button>
                <span>${item.qty}</span>
                <button type="button" data-cart-inc="${item.key}" aria-label="${copy.cart.add}">+</button>
              </div>
            </div>
            <button class="icon-button" type="button" aria-label="${copy.cart.remove}" data-cart-remove="${item.key}">×</button>
          </article>
        `;
      })
      .join("");
  }

  const totals = cartTotals();
  $("[data-cart-totals]").innerHTML = `
    <div><span>${copy.cart.subtotal}</span><strong>${formatPrice(totals.subtotal)}</strong></div>
    <div><span>${copy.cart.shipping}</span><strong>${formatPrice(totals.shipping)}</strong></div>
    <div><span>${copy.cart.total}</span><strong>${formatPrice(totals.total)}</strong></div>
  `;
  renderCheckoutSummary();
}

function renderCheckoutSummary() {
  const checkoutSummary = $("[data-checkout-summary]");
  if (!checkoutSummary) return;
  const delivery = $('[name="delivery"]')?.value;
  const payment = $('[name="payment"]')?.value;
  const totals = cartTotals(delivery, payment);
  $("[data-checkout-summary]").innerHTML = `
    <strong>${ui().checkout.summary}: ${formatPrice(totals.total)}</strong>
    <p>${itemTierLabel(delivery, payment)}</p>
    <p>${ui().checkout.summaryNote}</p>
    <p>${ui().checkout.mailNote} <strong>${storeConfig.merchantEmail}</strong></p>
  `;
}

function openCart() {
  $("[data-cart-drawer]").classList.add("is-open");
  $("[data-cart-drawer]").setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}

function closeCart() {
  $("[data-cart-drawer]").classList.remove("is-open");
  $("[data-cart-drawer]").setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
}

function changeCartQty(key, delta) {
  const item = cart.find((cartItem) => cartItem.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((cartItem) => cartItem.key !== key);
  }
  saveCart();
  renderCart();
}

function openProduct(productId) {
  const product = activeProduct(getProduct(productId));
  const copy = ui();
  currentProductId = productId;
  selectedSize = product.sizes[0];
  selectedQty = 1;
  $("[data-product-detail]").innerHTML = `
    <div class="detail-gallery">
      <img data-main-image src="${product.image}" alt="${product.name}" />
      <div class="thumbs" aria-label="${copy.product.gallery}">
        <button class="is-active" type="button" data-view="center">${copy.product.frontBack}</button>
        <button type="button" data-view="left">${copy.product.front}</button>
        <button type="button" data-view="right">${copy.product.back}</button>
      </div>
      <p class="state">${copy.product.mockup}</p>
    </div>
    <div class="detail-copy">
      <div>
        <p class="eyebrow">${productCategory(product)}</p>
        <h2>${product.name}</h2>
      </div>
      <div class="prices">
        ${product.entry ? `<span class="entry-price">${formatPrice(product.entry)} - ${itemTierLabel("pickup", "cash")}</span>` : ""}
        <span class="regular-price">${formatPrice(product.regular)}</span>
        <span class="preorder-price">${formatPrice(product.preorder)} - ${copy.product.preorderPrice}</span>
      </div>
      ${product.printMode ? `<p class="price-note">${product.printMode}</p>` : ""}
      <p class="state">${copy.product.status}</p>
      <p>${product.description}</p>
      <div>
        <span class="eyebrow">${copy.size}</span>
        <div class="size-options">
          ${product.sizes
            .map(
              (size) =>
                `<button class="${size === selectedSize ? "is-active" : ""}" type="button" data-size="${size}">${size}</button>`,
            )
            .join("")}
        </div>
      </div>
      <button class="btn secondary" type="button" data-open-size>${copy.product.sizeGuide}</button>
      <div>
        <span class="eyebrow">${copy.product.quantity}</span>
        <div class="qty-control">
          <button type="button" data-detail-dec aria-label="${copy.cart.subtract}">−</button>
          <span data-detail-qty>1</span>
          <button type="button" data-detail-inc aria-label="${copy.cart.add}">+</button>
        </div>
      </div>
      <button class="btn primary full" type="button" data-add-detail>${copy.product.preorderNow}</button>
      <ul class="quick-info">
        ${copy.product.quickInfo.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <div class="extended">
        <section>
          <h3>${copy.product.designStory}</h3>
          <p>${product.story}</p>
        </section>
        <section>
          <h3>${copy.product.material}</h3>
          <p>${copy.product.materialText}</p>
        </section>
        <section>
          <h3>${copy.product.print}</h3>
          <p>${copy.product.printText}</p>
        </section>
        <section>
          <h3>${copy.product.care}</h3>
          <ul class="care-list">
            ${copy.product.careItems.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>
      </div>
    </div>
  `;
  $("[data-product-dialog]").showModal();
}

function setGalleryView(view) {
  const image = $("[data-main-image]");
  if (!image) return;
  const positions = {
    center: "center",
    left: "25% center",
    right: "75% center",
  };
  image.style.objectPosition = positions[view] || "center";
  $$("[data-view]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
}

function openCheckout() {
  if (!cart.length) return;
  closeCart();
  renderPaymentOptions();
  renderCart();
  $("[data-checkout-dialog]").showModal();
}

function selectedOptionText(select) {
  return select.options[select.selectedIndex]?.textContent || select.value;
}

function buildOrderEmail(form) {
  const data = new FormData(form);
  const deliverySelect = $('[name="delivery"]');
  const paymentSelect = $('[name="payment"]');
  const deliveryValue = data.get("delivery");
  const paymentValue = data.get("payment");
  const totals = cartTotals(deliveryValue, paymentValue);
  const lines = cart.map((item) => {
    const product = activeProduct(getProduct(item.productId));
    const unitPrice = itemUnitPrice(item, deliveryValue, paymentValue);
    return `- ${product.name} | ${ui().cart.size}: ${item.size} | ${itemTierLabel(deliveryValue, paymentValue)} | ${ui().product.quantity}: ${item.qty} | ${formatPrice(unitPrice * item.qty)}`;
  });
  const orderId = `YSISI-${Date.now().toString().slice(-6)}`;
  const body = [
    `Pedido ${orderId}`,
    "",
    "Productos:",
    ...lines,
    "",
    `${ui().cart.subtotal}: ${formatPrice(totals.subtotal)}`,
    `${ui().cart.shipping}: ${formatPrice(totals.shipping)}`,
    `${ui().cart.total}: ${formatPrice(totals.total)}`,
    "",
    "Cliente:",
    `${ui().checkout.name}: ${data.get("name")}`,
    `${ui().checkout.email}: ${data.get("email")}`,
    `${ui().checkout.phone}: ${data.get("phone") || "-"}`,
    `${ui().checkout.address}: ${data.get("address")}`,
    `${ui().checkout.city}: ${data.get("city")}`,
    `${ui().checkout.postal}: ${data.get("postal")}`,
    `${ui().checkout.country}: ${data.get("country")}`,
    "",
    `${ui().checkout.delivery}: ${selectedOptionText(deliverySelect)}`,
    `${ui().checkout.payment}: ${selectedOptionText(paymentSelect)}`,
    `${ui().checkout.coupon}: ${data.get("coupon") || "-"}`,
    `${ui().checkout.comments}: ${data.get("notes") || "-"}`,
  ].join("\n");

  return {
    subject: `Nuevo pedido ${orderId} - ¿Y si sí?`,
    body,
  };
}

function openOrderEmail(form) {
  const orderEmail = buildOrderEmail(form);
  const mailto = `mailto:${storeConfig.merchantEmail}?subject=${encodeURIComponent(orderEmail.subject)}&body=${encodeURIComponent(orderEmail.body)}`;
  window.location.href = mailto;
}

function bindEvents() {
  $(".nav-toggle").addEventListener("click", () => {
    const nav = $(".nav");
    const isOpen = nav.classList.toggle("is-open");
    $(".nav-toggle").setAttribute("aria-expanded", String(isOpen));
  });

  $$(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (link.dataset.navCategory) {
        $("[data-category]").value = link.dataset.navCategory;
        renderProducts();
      }
      $(".nav").classList.remove("is-open");
      $(".nav-toggle").setAttribute("aria-expanded", "false");
    });
  });

  ["data-search", "data-category", "data-size-filter"].forEach((attr) => {
    $(`[${attr}]`).addEventListener("input", renderProducts);
    $(`[${attr}]`).addEventListener("change", renderProducts);
  });

  $(".language").addEventListener("change", (event) => {
    currentLang = event.target.value.toLowerCase();
    localStorage.setItem(languageKey, currentLang);
    renderStaticContent();
    renderProducts();
    renderCart();
  });

  $('[name="delivery"]').addEventListener("change", () => {
    renderPaymentOptions();
    renderCheckoutSummary();
  });

  $('[name="payment"]').addEventListener("change", () => {
    renderCart();
    renderCheckoutSummary();
  });

  document.addEventListener("click", (event) => {
    const openProductButton = event.target.closest("[data-open-product]");
    const quickAddButton = event.target.closest("[data-quick-add]");
    const cartIncrement = event.target.closest("[data-cart-inc]");
    const cartDecrement = event.target.closest("[data-cart-dec]");
    const cartRemove = event.target.closest("[data-cart-remove]");
    const sizeButton = event.target.closest("[data-size]");
    const galleryButton = event.target.closest("[data-view]");

    if (openProductButton) openProduct(openProductButton.dataset.openProduct);
    if (quickAddButton) {
      const product = getProduct(quickAddButton.dataset.quickAdd);
      addToCart(product.id, product.sizes[0], 1);
    }
    if (cartIncrement) changeCartQty(cartIncrement.dataset.cartInc, 1);
    if (cartDecrement) changeCartQty(cartDecrement.dataset.cartDec, -1);
    if (cartRemove) {
      cart = cart.filter((item) => item.key !== cartRemove.dataset.cartRemove);
      saveCart();
      renderCart();
    }
    if (sizeButton) {
      selectedSize = sizeButton.dataset.size;
      $$("[data-size]").forEach((button) =>
        button.classList.toggle("is-active", button.dataset.size === selectedSize),
      );
    }
    if (galleryButton) setGalleryView(galleryButton.dataset.view);
    if (event.target.closest("[data-open-cart]")) openCart();
    if (event.target.closest("[data-close-cart]")) closeCart();
    if (event.target === $("[data-cart-drawer]")) closeCart();
    if (event.target.closest("[data-open-size]")) $("[data-size-dialog]").showModal();
    if (event.target.closest("[data-close-size]")) $("[data-size-dialog]").close();
    if (event.target.closest("[data-close-product]")) $("[data-product-dialog]").close();
    if (event.target.closest("[data-open-checkout]")) openCheckout();
    if (event.target.closest("[data-close-checkout]")) $("[data-checkout-dialog]").close();
    if (event.target.closest("[data-detail-inc]")) {
      selectedQty += 1;
      $("[data-detail-qty]").textContent = selectedQty;
    }
    if (event.target.closest("[data-detail-dec]")) {
      selectedQty = Math.max(1, selectedQty - 1);
      $("[data-detail-qty]").textContent = selectedQty;
    }
    if (event.target.closest("[data-add-detail]")) {
      addToCart(currentProductId, selectedSize, selectedQty);
      $("[data-product-dialog]").close();
    }
  });

  $("[data-checkout-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    openOrderEmail(event.currentTarget);
    $("[data-order-success]").hidden = false;
    cart = [];
    saveCart();
    renderCart();
  });

  $("[data-newsletter]").addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    alert("Listo. Te avisaremos cuando el drop entre a la cancha.");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeCart();
  });
}

renderStaticContent();
renderProducts();
renderCart();
bindEvents();
