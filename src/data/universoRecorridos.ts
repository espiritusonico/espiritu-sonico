export type UniversoMediaType = "image" | "video" | "note";

export type UniversoRecorrido = {
  id: string;
  titulo: string;
  resumen: string;
  destacado: string;
  contenido: string[];
  portalLabel: string;
  portalHint: string;
  media?: UniversoMediaType[];
};

export const recorridos: UniversoRecorrido[] = [
  {
  id: "origen",
  titulo: "Origen",
  resumen:
    "Tecnología, música y un momento donde ya no había forma de seguir haciendo lo mismo.",
  destacado:
    "No fue una idea. Fue un punto donde todo lo que venía separado empezó a encajar al mismo tiempo.",
  contenido: [
    "Mi relación con la tecnología empezó muy temprano. A los 9 años ya estaba frente a una computadora, en la época donde si te conectabas a internet nadie más podía usar el teléfono de línea. Si alguien quería llamar, había que cortar. Ese era el nivel de prioridad que tenía para mí.",
    "A los 13 años pasó algo que no pude explicar en ese momento, pero que después entendí como un quiebre real: vi Matrix en el cine. Fue la primera vez que sentí que la tecnología y algo mucho más profundo —lo que hoy podría llamar percepción, conciencia o lo que hay detrás de lo visible— estaban hablando de lo mismo.",
    "No lo podía poner en palabras, pero algo se desbloqueó ahí. Era como si esa película estuviera señalando algo que yo ya intuía pero no sabía cómo nombrar.",
    "Después vino toda la parte estructural: más de una decada trabajando en sistemas, pensamiento lógico, construcción, procesos. Eso no desapareció nunca. Hoy sigue siendo la base sobre la que está construido todo lo que hago.",
    "Pero en paralelo siempre hubo otra cosa. Algo que no entraba en esa estructura. Algo que no se resolvía con lógica.",
    "A los 33 años renuncié. No fue una decisión estratégica. Fue un punto donde ya no tenía sentido seguir sosteniendo una vida que no estaba alineada con lo que estaba pasando adentro.",
    "No tenía una estructura asegurada. Tenía claro que había algo con el sonido, con la percepción y con la experiencia que ya no podía seguir ignorando.",
    "Ese corte fue el inicio real de todo lo que vino después.",
    "En ese mismo contexto, en plena pandemia, apareció el primer proyecto concreto donde todo eso empezó a tomar forma: Sir Kimono Sahumitos. Sahumerios pequeños, hechos a mano, con un packaging de papel cortado con bisturí para generar un encastre tipo sobre.",
    "En la parte de atrás había un QR. Algo simple, pero clave. Ese código te llevaba a una página donde había viajes sonoros cargados para acompañar la experiencia.",
    "Ahí fue la primera vez que algo hizo clic de verdad: el aroma, el sonido y la tecnología trabajando juntos dentro de un mismo sistema. No como idea, sino como algo que ya funcionaba.",
    "Esa primera versión era muy simple, pero el concepto ya estaba completo. Con el tiempo eso fue creciendo hasta convertirse en lo que hoy es Espíritu Sónico."
  ],
  media: ["image"],
  portalLabel: "raíz",
  portalHint: "Donde todo se cruza",
},

  {
  id: "musica",
  titulo: "Música y canal",
  resumen:
    "La música no apareció como una habilidad. Apareció como una forma de entrar en estados.",
  destacado:
    "Antes de saber lo que hacía, ya estaba viajando con el sonido.",
  contenido: [
    "Soy guitarrista desde los 13 años. Pero nunca fue solamente tocar. Desde muy temprano empecé a notar que había algo en ciertas combinaciones de notas, en ciertos climas, que cambiaban completamente lo que me pasaba por dentro.",
    "No era emoción en el sentido clásico. Era otra cosa. Era como entrar en un estado distinto, como si el sonido abriera una puerta y te metiera en otro lugar.",
    "Ahí fue donde empezó todo, aunque en ese momento no tenía palabras para explicarlo.",
    "Después vinieron muchas experiencias, muchas exploraciones, muchas formas de entender qué estaba pasando. Pero la raíz es esa: el sonido como acceso.",
    "Todo lo que hoy es un viaje sonoro, una experiencia guiada o una arquitectura de estados, ya estaba ahí, en una guitarra, en una habitación, sin ningún tipo de marco teórico, pero con una percepción muy clara de lo que estaba ocurriendo."
  ],
  media: ["image"],
  portalLabel: "canal",
  portalHint: "El sonido abre",
},

  {
  id: "exploracion",
  titulo: "Exploración de\u00A0la conciencia",
  resumen:
    "Un recorrido real entre experiencia, estudio y prácticas que fueron abriendo otra forma de entender lo que pasa adentro.",
  destacado:
    "Primero viví los estados. Después empecé a entenderlos.",
  contenido: [
    "Antes de poder explicarlo, ya estaba metido en eso. Había una atracción muy fuerte por los estados internos, por lo que pasaba adentro, por lo que no era visible pero se sentía.",
    "En la adolescencia eso se volvió más intenso. Ahí aparece una etapa de exploración muy directa de la conciencia, probando distintas formas de entrar en esos estados. No desde la teoría, sino desde la experiencia. Eso fue lo que abrió el mapa.",
    "Después vino la necesidad de entender qué era todo eso. Ahí aparece el estudio. Estudié psicología social y desde ahí seguí leyendo y formándome de manera autodidacta. Durante años fui profundizando en distintas corrientes, pero hubo una que quedó como eje: Carl Jung.",
    "Jung me permitió entender algo clave: que el símbolo no es algo decorativo, sino una estructura que organiza la experiencia. El inconsciente no es un concepto abstracto, es algo que está operando todo el tiempo, y el símbolo es una de las formas en las que se expresa.",
    "Ahí empieza a tomar sentido por qué ciertas imágenes, ciertos sonidos o ciertos estados tienen tanta fuerza. No es algo subjetivo sin dirección. Hay una lógica detrás.",
    "Krishnamurti aparece desde otro lugar. No desde la estructura, sino desde la observación directa. Desde la posibilidad de ver lo que está pasando sin filtrarlo constantemente por ideas o interpretaciones.",
    "Y el Tao Te Ching entra como una comprensión más profunda todavía: hay procesos que no se pueden forzar. Cuanto más intentás controlar ciertos movimientos internos, más te alejás de lo que está pasando. Eso cambió mucho la forma en la que empecé a trabajar con la experiencia.",
    "En paralelo, buscando profundizar en técnicas de sahumerios, llegué a un curso de chamanismo integral con Tomás Codina. Ahí aparece algo que no estaba buscando directamente, pero que abrió un mundo nuevo: el contacto con las formas aymara.",
    "A partir de ese estudio empiezo a trabajar la canalización del animal de poder. No como algo teórico, sino como una práctica concreta que después empiezo a integrar dentro de mis propios procesos.",
    "Esa experiencia no quedó aislada. Más adelante viajé a las sierras de Córdoba, a Anisacate, donde viví experiencias muy fuertes con prácticas y formas mapuche. Entre ellas, un temazcal y el proceso de hacer mi propio rapé, teniendo el honor de trabajar con cenizas de pehuén, un árbol sagrado.",
    "Todo eso no lo tomo como algo que me pertenece ni como algo para repetir. Lo tomo como experiencia que transforma, que abre y que después se integra desde un lugar propio.",
    "De todo ese recorrido quedó algo muy claro: hay niveles de la experiencia que no se transforman con palabras. Y ahí es donde el sonido y el símbolo empiezan a aparecer como herramientas reales."
  ],
  media: ["note"],
  portalLabel: "visión",
  portalHint: "Experiencia y comprensión",
},

  {
  id: "sonologia",
  titulo: "Sonología Ritual",
  resumen:
    "El punto donde el sonido deja de ser expresión y se vuelve herramienta para trabajar estados.",
 destacado:
  "Cada capa, cada frecuencia y cada silencio tiene una función dentro del recorrido.",
  contenido: [
    "Después de años de exploración, estudio y práctica, hubo un momento donde todo empezó a ordenarse. Lo que antes eran experiencias sueltas empezó a tomar forma como un sistema.",
    "La Sonología Ritual nace ahí. No como una idea, sino como la necesidad de entender qué estaba pasando en cada viaje y cómo se podía sostener eso de forma consistente.",
    "Un viaje sonoro no se arma al azar. Hay una arquitectura. Trabajo en capas, combinando sonido, silencio, ritmo y textura para generar distintos estados a lo largo del recorrido.",
    "La tecnología tiene un rol central en eso. Uso software de audio para construir paisajes sonoros, afinando frecuencias y diseñando melodías que acompañan procesos específicos. No es música para escuchar. Es sonido para atravesar.",
    "A eso se suman los instrumentos. El tambor, la flauta doble, las percusiones, el melodrum, las campanas. No aparecen como decoración, sino como presencia. Cada uno tiene un lugar dentro del viaje.",
    "La voz también es parte del proceso. No repite algo memorizado. Aparece en función de lo que está pasando en el momento, guiando la experiencia de forma directa.",
    "Todo eso se organiza en una estructura. Hay momentos de apertura, de profundización, de contacto, de integración y de cierre. Cada etapa tiene su función dentro del recorrido.",
    "La Sonología Ritual son experiencias sonoras donde prácticas ancestrales, meditación guiada y herramientas digitales actuales se encuentran en un mismo punto, dando lugar a procesos que no podrían sostenerse desde un solo lenguaje.",
  ],
  media: ["video", "image"],
  portalLabel: "método",
  portalHint: "Cómo sucede",
},

 {
  id: "experiencias",
  titulo: "Experiencias",
  resumen:
    "Espacios donde el sonido se convierte en proceso y cada recorrido toma forma en tiempo real.",
  destacado:
    "Hay experiencias que se entienden en el momento en que pasan.",
  contenido: [
    "El lugar donde todo esto se vuelve real es en los viajes sonoros. Ahí es donde la Sonología Ritual deja de ser estructura y pasa a ser experiencia directa.",
    "Cada viaje tiene una intención distinta. Algunos abren, otros ordenan, otros te llevan a lugares internos que no aparecen en lo cotidiano. No hay uno igual a otro, pero todos están construidos desde la misma base.",
    "Eso se fue desarrollando en la práctica. Probando, ajustando y viendo qué sucede cuando el sonido realmente empieza a trabajar sobre el estado.",
    "Con el tiempo, las experiencias se fueron dando en muchos espacios distintos. Desde hostels perdidos en el monte, donde el silencio y el entorno ya te metían en otro estado antes de empezar, hasta estudios cuidados en plena ciudad, o incluso un domo frente al Uritorco.",
    "No son lugares aislados ni casos puntuales. Son parte de un recorrido que se fue construyendo con los años, en contextos muy distintos, donde cada espacio modifica la experiencia pero el trabajo de fondo se mantiene.",
    "Más allá del lugar, lo que se sostiene es el proceso. La combinación de sonido, voz y estructura va guiando la experiencia sin necesidad de forzar nada.",
    "También aparecen recorridos más específicos, como el trabajo con el animal de poder o procesos enfocados en percepción, memoria o desbloqueo interno. Cada uno con su propio lenguaje, pero dentro del mismo sistema.",
    "Que más de 300 personas hayan atravesado estos procesos no es un número para mostrar. Es la confirmación de que esto funciona cuando se vive.",
    "En paralelo, los sahumerios siguen siendo parte de ese mismo sistema. No como algo separado, sino como otra forma de sostener la experiencia desde lo físico.",
  ],
  media: ["image", "video"],
  portalLabel: "práctica",
  portalHint: "Donde sucede",
},

  {
  id: "simbolo",
  titulo: "Símbolo y sigilo",
  resumen:
    "Cuando el lenguaje no alcanza, el símbolo aparece como una forma directa de trabajar sobre la experiencia.",
  destacado:
    "Hay cosas que no se cambian pensando. Se cambian trabajando en otro nivel.",
  contenido: [
    "Después de todo el recorrido con el sonido y la experiencia, aparece algo que termina de cerrar el sistema: el símbolo.",
    "Durante años de estudio y práctica, sobre todo a partir de la psicología y el trabajo con el inconsciente, se vuelve evidente que hay procesos que no se modifican desde la palabra. Podés entender algo perfectamente y aun así seguir repitiéndolo.",
    "Ahí es donde el símbolo toma sentido. No como algo estético, sino como una forma de condensar información, intención y dirección en una sola imagen.",
    "Desde la mirada de Jung, el símbolo no representa: organiza. Es una forma en la que el inconsciente estructura la experiencia. Y cuando empezás a trabajar con eso de manera consciente, deja de ser algo abstracto y se vuelve una herramienta.",
    "El sigilo aparece dentro de ese campo. Como una forma de traducir intención en símbolo, reduciendo el ruido mental y trabajando de manera más directa.",
    "No es algo que se usa de forma aislada. Se integra con el resto del sistema. Así como el sonido permite abrir estados, el símbolo permite reorganizarlos.",
    "Ahí es donde todo conecta. La Sonología Ritual trabaja desde el sonido, la experiencia lo valida en lo real, y el símbolo actúa en un nivel más profundo.",
    "Desde mi formación en sistemas, lo entiendo de forma bastante directa: si el sonido puede desbloquear, el símbolo puede reorganizar.",
    "Para mí, el sigilo es una forma de “hackeo” del cerebro. No en un sentido técnico literal, sino como una manera de intervenir directamente sobre la estructura interna en lugar de intentar cambiar algo desde la lógica.",
    "En vez de repetir una idea o una intención en palabras, lo que hago es convertirla en un símbolo. Ahí se reduce el ruido mental y esa intención empieza a operar en otro nivel.",
    "El sigilo funciona dentro de esa lógica: condensar, simplificar y dirigir. Es una herramienta concreta, no un concepto abstracto.",
    "Hay antecedentes claros de este tipo de trabajo, como el de Austin Osman Spare, que fue una de las referencias más fuertes en el desarrollo del sigilo como práctica moderna.",
    "Todo esto no está separado del resto. Así como el sonido abre estados, el símbolo permite reorganizarlos desde otro lugar.",
    "No es una idea. Es una forma de trabajar."
  ],
  media: ["image"],
  portalLabel: "símbolo",
  portalHint: "Cierre del sistema",
}
];