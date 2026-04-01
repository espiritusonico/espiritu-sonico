export type ViajeVisual = {
  subtitulo: string;
  frase: string;
  proposito: string;
  construccion: string;
  detras: string;
  recomendaciones: string[];
  durante: string[];
  sonologia: string;
};

export const contenidoVisualPorSlug: Record<string, ViajeVisual> = {
  "niebla-sagrada": {
    subtitulo: "Purificación",
    frase:
      "Ideal para momentos de limpieza, transición o renovación del espacio interno.",
    proposito:
      "Este viaje acompaña procesos de depuración, despeje y reorganización interna. Su atmósfera fue pensada para ayudar a soltar carga, renovar el clima perceptivo y abrir una sensación de mayor claridad.",
    construccion:
      "La escucha fue diseñada como una experiencia inmersiva de limpieza sutil y profundidad gradual. Las capas sonoras, los espacios de respiración y la distribución de la energía buscan sostener un proceso de renovación sin rigidez ni exceso de tensión.",
    detras:
      "Detrás de este viaje hay un trabajo de composición orientado a generar un clima de purificación y recentrado. No se trata solo de una pieza ambiental, sino de una arquitectura sonora pensada para acompañar un pasaje interno.",
    recomendaciones: [
      "Escucharlo al limpiar un espacio o antes de una práctica puede ayudar a abrir una sensación más clara y respirable.",
      "También funciona bien en momentos de transición, cierre o cambio de etapa, cuando hace falta soltar densidad acumulada.",
      "Puede acompañarse con respiración consciente, pausa, sahumo o simplemente con una disposición de escucha presente.",
    ],
    durante: [
      "Sensación de limpieza interna o despeje mental.",
      "Mayor percepción de espacio, aire y liviandad.",
      "Aparición de imágenes, recuerdos o comprensiones ligadas a procesos de cierre y renovación.",
    ],
    sonologia:
      "Dentro de la Sonología Ritual, este viaje trabaja sobre la escucha como portal de reorganización perceptiva. El sonido no actúa como fondo: abre un campo donde la limpieza, la intención y la experiencia pueden encontrar una forma sensible.",
  },

  "silencio-estelar": {
    subtitulo: "Sueño · Integración",
    frase:
      "Ideal para la noche, el descanso profundo o momentos de ansiedad que necesitan suavidad.",
    proposito:
      "Este viaje fue pensado para acompañar estados de descanso, integración y desaceleración suave. Su clima favorece la entrega, la quietud y una caída progresiva hacia una percepción más contenida y profunda.",
    construccion:
      "La composición está desarrollada para no invadir ni empujar. La distribución de capas, texturas y espacios de aire busca acompañar una transición gradual hacia estados de calma, aflojando el pulso interno sin brusquedad.",
    detras:
      "Detrás de esta escucha hay una búsqueda por crear una experiencia de cobijo y reposo real. La intención no es solo relajar, sino ofrecer un soporte sonoro para integrar, soltar y descansar con mayor profundidad.",
    recomendaciones: [
      "Ideal para escuchar antes de dormir o al final del día, cuando el cuerpo y la mente necesitan bajar el ritmo.",
      "Puede acompañar muy bien una noche de descanso, una pausa profunda o el cierre de una práctica intensa.",
      "También puede ser útil en momentos de ansiedad suave, cuando se necesita contención sin sobreestimulación.",
    ],
    durante: [
      "Descenso progresivo de la activación interna.",
      "Mayor sensación de cobijo, suavidad y espacio interno seguro.",
      "Aparición de imágenes, ensoñaciones o estados de integración silenciosa.",
    ],
    sonologia:
      "Dentro de la Sonología Ritual, este viaje trabaja la escucha como un espacio de ablandamiento perceptivo. El sonido se organiza para sostener la transición hacia estados más receptivos, donde el descanso también puede ser una forma de acceso.",
  },
};

export function getViajeVisualFallback(viaje: {
  slug: string;
  descripcion: string;
}): ViajeVisual {
  return (
    contenidoVisualPorSlug[viaje.slug] ?? {
      subtitulo: "Viaje sonoro",
      frase:
        "Una experiencia sonora para acompañar procesos internos desde la escucha.",
      proposito:
        viaje.descripcion ||
        "Este viaje forma parte del universo sonoro de Espíritu Sónico.",
      construccion:
        "La escucha fue diseñada como una experiencia inmersiva, cuidando la atmósfera, el pulso y la profundidad para abrir un clima perceptivo propio.",
      detras:
        "Detrás de este viaje hay una intención compositiva orientada a sostener procesos internos a través del sonido.",
      recomendaciones: [
        "Escucharlo en un espacio tranquilo puede favorecer una experiencia más inmersiva.",
        "Puede acompañar momentos de pausa, contemplación, práctica o descanso.",
      ],
      durante: [
        "Mayor conexión con el clima interno.",
        "Cambios sutiles en la percepción, la respiración o la atención.",
      ],
      sonologia:
        "Este viaje forma parte de una búsqueda donde el sonido es trabajado como portal de experiencia, percepción y transformación sensible.",
    }
  );
}