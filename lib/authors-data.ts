export interface Author {
  slug: string
  name: string
  role: string
  credentials: string
  bio: string
  bioFull?: string
  expertise: string[]
  image: string
}

export const authors: Author[] = [
  {
    slug: "carlos-sanchez",
    name: "Carlos Sánchez",
    role: "Analista de Inversiones",
    credentials: "Licenciado en Economía · 12 años en mercados financieros",
    bio: "Carlos es economista especializado en mercados de renta variable, fondos indexados y planificación de jubilación. Trabajó ocho años como analista en una gestora de fondos antes de dedicarse a la educación financiera. Su enfoque se basa en estrategias pasivas de largo plazo accesibles para cualquier inversor.",
    bioFull: `Carlos Sánchez es economista y analista de inversiones con más de doce años de experiencia en mercados financieros europeos. Licenciado en Economía por la Universidad Autónoma de Madrid, inició su carrera en el área de análisis cuantitativo de una gestora de fondos, donde durante ocho años fue responsable de evaluar carteras de renta variable española y europea, así como de elaborar informes sobre fondos indexados referenciados al MSCI World y al MSCI Europe.

Su trayectoria en el sector institucional le permitió comprobar de primera mano una realidad que los datos confirman sistemáticamente: la gran mayoría de fondos de gestión activa no supera a su índice de referencia una vez descontadas las comisiones. Esta observación, respaldada por estudios publicados por ESMA y el Banco de España, fue el punto de inflexión que lo llevó a convertirse en divulgador de finanzas personales y a defender la inversión indexada de bajo coste como la estrategia más racional para el ahorrador particular.

Hoy Carlos se dedica exclusivamente a la educación financiera. Sus artículos abordan la construcción de carteras indexadas con ETFs de Vanguard, iShares o Amundi, la fiscalidad de los fondos de inversión en el IRPF español, la planificación de la jubilación complementando la pensión pública, y la psicología del inversor durante correcciones del mercado. Escribe con un lenguaje directo y sin tecnicismos innecesarios, convencido de que cualquier persona puede aprender a gestionar su dinero con el conocimiento adecuado.

Su metodología de trabajo se basa en contrastar toda la información con fuentes oficiales: memorias de supervisión de la CNMV, informes del Banco de España y bases de datos de rentabilidad de Morningstar. Evalúa cada producto financiero según su TER (Total Expense Ratio), su tracking error respecto al índice y su historial de liquidez. Nunca recomienda productos que no cumplan los criterios que él mismo aplica a sus propias finanzas.

Carlos defiende que la inversión exitosa no se basa en predecir el mercado, sino en tres principios sencillos: empezar lo antes posible, diversificar geográficamente y mantener las comisiones al mínimo. Para él, invertir 200 € mensuales durante 25 años en un fondo indexado global con un coste del 0,15% anual es más efectivo que cualquier estrategia activa de selección de valores. Su misión es que cada lector comprenda este principio y lo ponga en práctica sin importar su nivel de ingresos inicial.`,
    expertise: ["Fondos indexados", "ETFs", "Acciones", "Planificación de retiro", "Interés compuesto"],
    image: "/placeholder-user.jpg",
  },
  {
    slug: "maria-lopez",
    name: "María López",
    role: "Planificadora Financiera Personal",
    credentials: "Máster en Finanzas Personales · Consultora financiera independiente",
    bio: "María es consultora financiera independiente con más de 10 años ayudando a familias y jóvenes profesionales españoles a sanear sus finanzas. Experta en presupuestos, eliminación de deudas y fondos de emergencia, cree que el primer paso hacia la libertad financiera es entender a dónde va cada euro que ganas.",
    bioFull: `María López es planificadora financiera personal con Máster en Finanzas Personales y más de diez años de experiencia ayudando a familias, parejas y jóvenes profesionales españoles a recuperar el control de su dinero. A lo largo de su carrera ha trabajado como consultora financiera independiente, asesorando a cientos de personas en situaciones que van desde la gestión de una hipoteca a tipo variable hasta la planificación del ahorro para la educación de sus hijos.

Su especialidad es la economía doméstica real: no la teoría de los libros de texto, sino las decisiones financieras del día a día. Presupuestos familiares que funcionan, estrategias para eliminar deudas de tarjetas de crédito con el método de la avalancha de intereses, y fondos de emergencia adaptados al contexto español, donde los imprevistos más frecuentes son reparaciones del hogar, periodos de desempleo o gastos no cubiertos plenamente por la Seguridad Social.

María comenzó su carrera en el sector de la banca minorista, donde observó cómo los productos financieros se vendían con frecuencia priorizando la comisión del comercializador sobre el beneficio real del cliente. Esa experiencia la motivó a formarse en planificación financiera independiente y a trabajar directamente con particulares, sin conflictos de interés, con el único objetivo de mejorar su situación económica real.

En cuanto a metodología, antes de proponer cualquier estrategia, María analiza tres variables clave: el flujo de caja mensual real (ingresos menos gastos reales, no los estimados), el nivel de deuda total y su coste efectivo, y el horizonte temporal de los objetivos financieros. Utiliza la regla 50/30/20 como punto de partida, pero siempre la adapta a la realidad de cada familia, considerando el coste de la vivienda en cada ciudad española, la carga fiscal del IRPF y las cotizaciones a la Seguridad Social.

María defiende que la libertad financiera no está reservada a personas con ingresos altos. Es el resultado de tres hábitos sostenidos en el tiempo: gastar menos de lo que se ingresa, ahorrar de forma automática antes de ver el dinero disponible, y evitar las deudas de consumo. También insiste en la importancia de conocer los derechos del consumidor financiero en España y de consultar el registro oficial de la CNMV antes de contratar cualquier producto de inversión o ahorro.`,
    expertise: ["Presupuesto personal", "Ahorro", "Gestión de deudas", "Crédito", "Finanzas familiares"],
    image: "/placeholder-user.jpg",
  },
  {
    slug: "alejandro-torres",
    name: "Alejandro Torres",
    role: "Especialista en Tecnología Financiera",
    credentials: "Ingeniero en Sistemas · Certificado en Blockchain y Fintech",
    bio: "Alejandro combina su formación técnica con una profunda pasión por las finanzas personales. Ha analizado más de 50 plataformas fintech, apps de inversión y activos digitales, y su misión es ayudar a los españoles a distinguir las oportunidades reales de los riesgos en el ecosistema fintech europeo.",
    bioFull: `Alejandro Torres es especialista en tecnología financiera con formación en Ingeniería en Sistemas y certificación en Blockchain y Fintech. Lleva más de siete años analizando plataformas digitales de inversión, aplicaciones de gestión financiera personal y activos digitales, habiendo evaluado en profundidad más de cincuenta herramientas del ecosistema fintech europeo y español.

Comenzó su carrera como desarrollador de software para entidades financieras, lo que le dio una perspectiva única sobre el funcionamiento interno de las plataformas de banca digital, los robo-advisors y los sistemas de pago instantáneo. Esta visión técnica le permite analizar no solo la experiencia de usuario de una aplicación financiera, sino también su arquitectura de seguridad, su modelo de negocio y los riesgos reales que puede implicar para el usuario particular.

En los últimos años se ha especializado en el análisis de activos digitales y en el marco regulatorio europeo del sector fintech. Sigue de cerca la implementación del reglamento MiCA (Markets in Crypto-Assets) de la Unión Europea, que establece las reglas para la emisión y comercialización de criptomonedas en España y en el resto de la UE. También monitorea las directrices de la CNMV y del Banco de España sobre la distribución de activos digitales al inversor minorista español.

Su metodología de análisis evalúa seis dimensiones en cada plataforma: seguridad (cifrado, autenticación de dos factores, cobertura del Fondo de Garantía de Depósitos si aplica), transparencia de comisiones, facilidad de uso real, regulación y supervisión por organismos como la CNMV o el Banco de España, sostenibilidad del modelo de negocio, y calidad del servicio de atención al cliente. Solo recomienda herramientas que ha utilizado personalmente durante un período mínimo de prueba real.

Alejandro cree que la tecnología tiene el potencial de democratizar el acceso a servicios financieros de calidad para cualquier ciudadano español, independientemente de su patrimonio. Plataformas como los robo-advisors regulados, las apps de microinversión o los servicios de open banking permiten hoy acceder a estrategias que antes requerían grandes cantidades de capital o asesoría privada costosa. Sin embargo, advierte que la innovación también trae riesgos: proliferación de productos no regulados, chiringuitos financieros digitales y estafas en el ámbito de las criptomonedas. Su misión es ayudar a los lectores a distinguir las oportunidades reales de los riesgos innecesarios en el ecosistema fintech europeo.`,
    expertise: ["Criptomonedas", "Fintech", "Apps financieras", "Inteligencia Artificial", "Ingresos digitales"],
    image: "/placeholder-user.jpg",
  },
]

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug)
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find((a) => a.name === name)
}

export function getAllAuthors(): Author[] {
  return authors
}
