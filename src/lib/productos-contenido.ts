export type ProductoVisual = {
  resumenHero: string;
  perfilIntro: string;
  perfil: { label: string; value: number }[];
  presenciaEyebrow: string;
  presenciaTitulo: string;
  presenciaTexto1: string;
  presenciaTexto2: string;
  caracter: string;
  momentoIdeal: string;
  descripcionTitulo: string;
  descripcionParrafos: string[];
  viajeDestacado: string;
  propiedadesFallback: { titulo: string; texto: string }[];
  recomendaciones: { titulo: string; texto: string }[];
  cierre: string;
};

export const contenidoVisualPorSlug: Record<string, ProductoVisual> = {
  "lavanda-eucaliptus-menta": {
    resumenHero: "Frescura herbal · claridad · limpieza suave",
    perfilIntro: "Una lectura sensible de cómo esta mezcla se expresa en el espacio.",
    perfil: [
      { label: "Frescura", value: 4.5 },
      { label: "Suavidad", value: 4 },
      { label: "Claridad", value: 4.5 },
      { label: "Profundidad", value: 2.5 },
      { label: "Apertura", value: 4 },
    ],
    presenciaEyebrow: "Presencia en el espacio",
    presenciaTitulo: "Un sahumerio claro, herbáceo y respirable",
    presenciaTexto1:
      "Su carácter acompaña limpiezas suaves, aperturas del día, momentos de enfoque y pausas conscientes donde hace falta renovar el clima sin invadirlo.",
    presenciaTexto2:
      "Funciona especialmente bien en espacios donde se busca claridad, circulación y una sensación más ligera tanto en el ambiente como en la mente.",
    caracter:
      "Fresco, claro y aireado, con una presencia amable que limpia sin imponerse.",
    momentoIdeal:
      "Mañanas, reinicios, pausas conscientes o apertura previa a una práctica.",
    descripcionTitulo: "Una presencia herbal que limpia sin invadir",
    descripcionParrafos: [
      "Este sahumerio fue pensado para quienes buscan una limpieza sutil pero efectiva, capaz de renovar el clima del espacio sin volverlo pesado ni excesivamente intenso. Su carácter es fresco, claro y vegetal.",
      "La lavanda aporta serenidad y una cualidad envolvente que aquieta. El eucaliptus abre, despeja y refresca. La menta introduce una nota viva, ligera y revitalizante. Juntas, estas plantas generan una atmósfera que ayuda a cambiar el pulso del lugar y también el estado interno de quien lo habita.",
      "Puede acompañar una mañana de trabajo, una práctica meditativa, una limpieza del hogar o simplemente ese momento en que hace falta cortar con la densidad acumulada y volver a respirar con mayor amplitud.",
    ],
    viajeDestacado:
      "Esta combinación puede profundizarse con una escucha diseñada para acompañar su clima: claridad, respiración y ligereza. El viaje sonoro asociado no funciona como un agregado decorativo, sino como una extensión de la experiencia.",
    propiedadesFallback: [
      {
        titulo: "Lavanda",
        texto:
          "Aporta calma, suavidad y una sensación de cobijo sutil que ayuda a relajar el campo interno.",
      },
      {
        titulo: "Eucaliptus",
        texto:
          "Despeja, refresca y abre la percepción, generando una impresión de limpieza aérea y renovación.",
      },
      {
        titulo: "Menta",
        texto:
          "Introduce vitalidad, claridad y una nota estimulante que ayuda a cortar la pesadez ambiental.",
      },
      {
        titulo: "La combinación",
        texto:
          "El resultado es una alquimia fresca y armonizadora, ideal para limpiar, revitalizar y devolver ligereza al espacio.",
      },
    ],
    recomendaciones: [
      {
        titulo: "Apertura del día",
        texto:
          "Encenderlo por la mañana, abrir una ventana unos minutos y dejar que el humo recorra el espacio antes de comenzar una actividad importante. Funciona muy bien como gesto de renovación y enfoque.",
      },
      {
        titulo: "Limpieza previa a una práctica",
        texto:
          "Puede usarse antes de meditar, escribir, escuchar un viaje sonoro o simplemente para cambiar la densidad de una habitación. No exige una ceremonia compleja: alcanza con presencia, intención y escucha.",
      },
    ],
    cierre:
      "Cada combinación de Espíritu Sónico busca abrir un clima, no solo perfumar un ambiente.",
  },

  "salvia-benjui-palo-santo": {
    resumenHero: "Purificación profunda · recogimiento · protección",
    perfilIntro: "Una lectura sensible de cómo esta mezcla se expresa en el espacio.",
    perfil: [
      { label: "Frescura", value: 2.5 },
      { label: "Suavidad", value: 3 },
      { label: "Claridad", value: 4 },
      { label: "Profundidad", value: 5 },
      { label: "Apertura", value: 4 },
    ],
    presenciaEyebrow: "Presencia en el espacio",
    presenciaTitulo: "Una presencia más ritual, densa y envolvente",
    presenciaTexto1:
      "Su carácter acompaña limpiezas profundas, momentos de recogimiento, cierres de etapa y situaciones donde hace falta restaurar una sensación de eje, protección y presencia.",
    presenciaTexto2:
      "Funciona especialmente bien en espacios que necesitan un cambio energético más marcado, una depuración simbólica o una atmósfera de mayor sostén ritual.",
    caracter:
      "Profundo, resinoso y ceremonial, con una impronta más intensa y concentrada.",
    momentoIdeal:
      "Atardeceres, cierres, limpiezas profundas, umbrales personales o apertura de trabajos rituales.",
    descripcionTitulo: "Una combinación de raíz sagrada y limpieza profunda",
    descripcionParrafos: [
      "Este sahumerio fue pensado para momentos en los que no alcanza con refrescar el ambiente: hace falta transformar su densidad. Su presencia es más honda, más ritual y más marcada.",
      "La salvia aporta purificación y corte. El benjuí suma una textura resinosa, cálida y protectora. El palo santo ordena, armoniza y deja una sensación de profundidad amable que sostiene el trabajo sin volverlo áspero.",
      "Juntas, estas plantas crean un humo con impronta ceremonial, ideal para cierres, limpiezas simbólicas, preparación de altares o prácticas donde se busca mayor recogimiento y fuerza interna.",
    ],
    viajeDestacado:
      "Su potencia se amplifica cuando se vincula con una escucha adecuada. El viaje sonoro asociado acompaña procesos de limpieza, reorganización y recentrado, expandiendo el trabajo de la mezcla más allá del momento del sahumo.",
    propiedadesFallback: [
      {
        titulo: "Salvia",
        texto:
          "Aporta limpieza, depuración y una acción clara sobre ambientes cargados o momentos de transición.",
      },
      {
        titulo: "Benjuí",
        texto:
          "Introduce una cualidad protectora, cálida y resinosa que envuelve el espacio con mayor densidad simbólica.",
      },
      {
        titulo: "Palo Santo",
        texto:
          "Ordena, armoniza y suaviza la intensidad de la mezcla, dejando una sensación de eje y profundidad.",
      },
      {
        titulo: "La combinación",
        texto:
          "El resultado es una alquimia protectora y transformadora, ideal para limpiar en profundidad y devolver centro al espacio.",
      },
    ],
    recomendaciones: [
      {
        titulo: "Cierre de ciclo",
        texto:
          "Encenderlo al terminar una etapa, antes de ordenar el espacio o al cerrar una jornada intensa. Puede acompañar escrituras de cierre, respiración consciente o un momento de silencio intencional.",
      },
      {
        titulo: "Protección del ambiente",
        texto:
          "Usarlo al ingresar a un lugar que se siente pesado, antes de una práctica profunda o para delimitar simbólicamente un espacio de trabajo interior. Su fuerza pide presencia y una intención clara.",
      },
    ],
    cierre:
      "Algunas combinaciones no solo armonizan: también ayudan a cortar, depurar y devolver centro.",
  },

  "sandalo-rojo-lavanda-eucaliptus-menta": {
    resumenHero: "Calidez herbal · enfoque · expansión suave",
    perfilIntro: "Una lectura sensible de cómo esta mezcla se expresa en el espacio.",
    perfil: [
      { label: "Frescura", value: 3.5 },
      { label: "Suavidad", value: 4 },
      { label: "Claridad", value: 4 },
      { label: "Profundidad", value: 3.5 },
      { label: "Apertura", value: 4.5 },
    ],
    presenciaEyebrow: "Presencia en el espacio",
    presenciaTitulo: "Una mezcla cálida, fresca y de apertura progresiva",
    presenciaTexto1:
      "Su carácter acompaña momentos donde hace falta combinar claridad con suavidad, enfoque con respiración amplia y una atmósfera ritual que no se vuelva pesada.",
    presenciaTexto2:
      "Funciona especialmente bien en prácticas de introspección ligera, mañanas creativas o instancias donde el espacio necesita presencia sin exceso de densidad.",
    caracter:
      "Herbal, cálido y equilibrado, con una expansión gradual y amable.",
    momentoIdeal:
      "Inicio del día, trabajo creativo, escucha sonora o pausas de recentrado.",
    descripcionTitulo: "Un equilibrio entre arraigo suave y circulación",
    descripcionParrafos: [
      "Esta combinación reúne una base más cálida con notas herbales y frescas que ordenan sin endurecer el ambiente. Su presencia se siente envolvente, pero deja aire.",
      "El sándalo rojo aporta cuerpo, calidez y profundidad amable. La lavanda suaviza. El eucaliptus despeja y la menta activa una claridad ligera que ayuda a renovar el pulso del espacio.",
      "El resultado es una mezcla versátil, útil tanto para acompañar una práctica como para transformar el clima cotidiano sin llevarlo a un extremo demasiado denso o demasiado etéreo.",
    ],
    viajeDestacado:
      "La experiencia puede continuar en una escucha especialmente pensada para acompañar su carácter. El viaje sonoro asociado extiende la mezcla hacia una atmósfera más inmersiva y perceptiva.",
    propiedadesFallback: [
      {
        titulo: "Sándalo rojo",
        texto:
          "Aporta base, calidez y una sensación de arraigo sutil que da sostén a la mezcla.",
      },
      {
        titulo: "Lavanda",
        texto:
          "Suaviza el campo y ayuda a crear una atmósfera serena y receptiva.",
      },
      {
        titulo: "Eucaliptus y menta",
        texto:
          "Abren, despejan y añaden una claridad aérea que evita que la mezcla se vuelva pesada.",
      },
      {
        titulo: "La combinación",
        texto:
          "El resultado es una alquimia equilibrada, clara y envolvente, ideal para ordenar el espacio con suavidad.",
      },
    ],
    recomendaciones: [
      {
        titulo: "Preparación de un espacio creativo",
        texto:
          "Encenderlo antes de escribir, producir, practicar o diseñar algo importante. Ayuda a limpiar el ruido del ambiente sin apagar el impulso interno.",
      },
      {
        titulo: "Acompañamiento de escucha",
        texto:
          "Puede usarse antes de un viaje sonoro, una meditación guiada o una pausa de recentrado. Su presencia favorece una entrada gradual y respirable al momento.",
      },
    ],
    cierre:
      "Cuando una mezcla encuentra equilibrio, el espacio cambia sin necesidad de imponerse.",
  },
};

export function getProductoVisualFallback(producto: {
  slug: string;
  mezcla: string;
  descripcionCorta: string;
  descripcionLarga: string;
  recomendacionesRituales: string[];
}): ProductoVisual {
  return contenidoVisualPorSlug[producto.slug] ?? {
    resumenHero: producto.descripcionCorta ?? "",
    perfilIntro: "Una lectura sensible de cómo esta mezcla se expresa en el espacio.",
    perfil: [
      { label: "Presencia", value: 4 },
      { label: "Suavidad", value: 4 },
      { label: "Claridad", value: 4 },
      { label: "Profundidad", value: 4 },
      { label: "Apertura", value: 4 },
    ],
    presenciaEyebrow: "Presencia en el espacio",
    presenciaTitulo: producto.mezcla,
    presenciaTexto1: producto.descripcionCorta ?? "",
    presenciaTexto2:
      "Una combinación pensada para acompañar el espacio con identidad propia dentro del universo Espíritu Sónico.",
    caracter: "Perfil ceremonial con una presencia sensible y trabajada.",
    momentoIdeal: "Prácticas, pausas conscientes o momentos de renovación.",
    descripcionTitulo: producto.mezcla,
    descripcionParrafos: producto.descripcionLarga
      ? [producto.descripcionLarga]
      : ["Este producto forma parte del universo ceremonial de Espíritu Sónico."],
    viajeDestacado:
      "Este producto puede expandirse a través de una experiencia sonora diseñada para acompañar su clima y su intención.",
    propiedadesFallback: [
      {
        titulo: "La combinación",
        texto:
          "Una fórmula pensada para acompañar el espacio con identidad propia dentro del universo Espíritu Sónico.",
      },
    ],
    recomendaciones: (producto.recomendacionesRituales ?? []).map((texto, i) => ({
      titulo: `Recomendación ${i + 1}`,
      texto,
    })),
    cierre:
      "Cada combinación de Espíritu Sónico busca abrir un clima, no solo perfumar un ambiente.",
  };
}