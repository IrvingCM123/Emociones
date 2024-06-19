import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private TemaA =
    {
      Titulo: "Bisquerra",
      Descripcion: "Rafael Bisquerra, un destacado experto en educación emocional, ha desarrollado un modelo de competencias emocionales que es ampliamente reconocido y utilizado en el ámbito educativo. Según Bisquerra, las competencias emocionales se dividen en cinco grandes bloques:",
      Imagen: "/assets/img/IMG-20240616-WA0093.jpg",
      Conclusion: "Cada una de estas competencias emocionales juega un papel crucial en el desarrollo integral de la persona, proporcionando herramientas y habilidades para manejar de manera efectiva los desafíos emocionales y sociales que se presentan en la vida cotidiana. La educación emocional, tal como la propone Bisquerra, busca integrar estas competencias en el currículo educativo para fomentar el bienestar y el éxito de los estudiantes tanto a nivel personal como académico y profesional",
      Subtemas: [
          "Conciencia emocional",
          "Regulación emocional",
          "Autonomía emocional",
          "Competencias social",
          "Habilidades para la vida y el bienestar"
      ]
    }

  private SubtemaA1 =
    [
      {
        Titulo: "Conciencia emocional",
        Imagen: "/assets/img/IMG-20240616-WA0093.jpg"
      },
      {
        Titulo: "Conciencia de las propias emociones:",
        Descripcion1: "Identificación de emociones: Ser capaz de nombrar y distinguir entre diferentes emociones como la alegría, tristeza, miedo, sorpresa, etc.",
        Descripcion2: "Comprensión de las emociones: Entender las causas y consecuencias de nuestras emociones, cómo se relacionan con nuestros pensamientos y comportamientos.",
        Descripcion3: "Aceptación de las emociones: Reconocer que todas las emociones, tanto positivas como negativas, son válidas y tienen un propósito.",
        Imagen: "/assets/img/IMG-20240616-WA0094.jpg"
      },
      {
        Titulo: "Conciencia de las emociones de los demás:",
        Descripcion1: "Percepción emocional: Detectar las emociones en otras personas a través de señales verbales y no verbales como el tono de voz, expresión facial y lenguaje corporal.",
        Descripcion2: "Empatía emocional: Experimentar y comprender las emociones de los demás, poniéndose en su lugar emocionalmente.",
        Descripcion3: "Sensibilidad interpersonal: Estar atento y responder adecuadamente a las emociones de los demás, lo cual facilita la comunicación y la relación interpersonal.",
        Imagen: "/assets/img/IMG-20240616-WA0095.jpg"
      }
    ]

  private SubtemaA2 = [
    {
      Titulo: "Regulación emocional",
      Imagen: "/assets/img/IMG-20240616-WA0096.jpg"
    },
    {
      Titulo: "Gestión de las propias emociones:",
      Descripcion1: "Control de impulsos: Ser capaz de gestionar las reacciones impulsivas y actuar de manera reflexiva.",
      Descripcion2: "Técnicas de relajación: Uso de técnicas como la respiración profunda, meditación o visualización para calmarse.",
      Descripcion3: "Reevaluación cognitiva: Cambiar la interpretación de una situación para alterar su impacto emocional.",
      Imagen: "/assets/img/IMG-20240616-WA0097.jpg"
    },
    {
      Titulo: "Manejo del estrés:",
      Descripcion1: "Identificación de estresores: Reconocer las fuentes de estrés en la vida diaria.",
      Descripcion2: "Desarrollo de estrategias de afrontamiento: Implementar estrategias prácticas para manejar el estrés, como la organización del tiempo, el establecimiento de prioridades y la búsqueda de apoyo social.",
      Descripcion3: "Autocuidado: Mantener prácticas de autocuidado que ayuden a reducir el estrés y fomentar el bienestar general, como el ejercicio, una dieta saludable y el descanso adecuado.",
      Imagen: "/assets/img/IMG-20240616-WA0098.jpg"
    }
  ]

  private SubtemaA3 = [
    {
      Titulo: "Autonomía emocional",
      Imagen: "/assets/img/IMG-20240616-WA0100.jpg"
    },
    {
      Titulo: "",
      Descripcion1: "Autoconcepto positivo: Tener una imagen positiva y realista de uno mismo y de las propias capacidades.",
      Descripcion2: "Aceptación personal: Aceptarse a uno mismo con todas sus fortalezas y debilidades.",
      Descripcion3: "Valoración positiva: Sentir aprecio y respeto por uno mismo.",
      Imagen: "/assets/img/IMG-20240616-WA0103.jpg"
    },
    {
      Titulo: "Automoticación:",
      Descripcion1: "Establecimiento de metas: Ser capaz de fijar y perseguir objetivos personales y profesionales.",
      Descripcion2: "Persistencia: Mantener la motivación y el esfuerzo frente a los obstáculos y dificultades.",
      Descripcion3: "Optimismo: Tener una actitud positiva hacia el futuro y las propias posibilidades.",
      Imagen: "/assets/img/IMG-20240616-WA0101.jpg"
    },
    {
      Titulo: "Resilencia:",
      Descripcion1: "Adaptabilidad: Capacidad para adaptarse a cambios y circunstancias adversas.",
      Descripcion2: "Fortaleza emocional: Mantener la estabilidad emocional ante la adversidad.",
      Descripcion3: "Aprendizaje de la experiencia: Extraer aprendizajes y crecimiento personal de las experiencias difíciles.",
      Imagen: "/assets/img/IMG-20240616-WA0102.jpg"
    },
  ]

  private SubtemaA4 = [
    {
      Titulo: "Competencias social",
      Imagen: "/assets/img/IMG-20240616-WA0104.jpg"
    },
    {
      Titulo: "Habilidades sociales:",
      Descripcion1: "Comunicación efectiva: Ser capaz de expresarse de manera clara y asertiva, así como escuchar activamente a los demás.",
      Descripcion2: "Cooperación: Trabajar bien en equipo, respetando y valorando las contribuciones de los demás.",
      Descripcion3: "Resolución de conflictos: Gestionar y resolver conflictos de manera constructiva y pacífica.",
      Imagen: "/assets/img/IMG-20240616-WA0105.jpg"
    },
    {
      Titulo: "Empatía:",
      Descripcion1: "Comprensión empática: Captar y entender los sentimientos y perspectivas de los demás.",
      Descripcion2: "Respuesta empática: Responder de manera apropiada a las necesidades y emociones de los demás.",
      Descripcion3: "Fomento de relaciones positivas: Utilizar la empatía para construir y mantener relaciones interpersonales saludables y satisfactorias.",
      Imagen: "/assets/img/IMG-20240616-WA0106.jpg"
    }
  ]

  private SubtemaA5 = [
    {
      Titulo: "Habilidades para la vida y el bienestar",
      Imagen: "/assets/img/IMG-20240616-WA0108.jpg"
    },
    {
      Titulo: "",
      Descripcion1: "Adopción de hábitos saludables.",
      Descripcion2: "Nutrición adecuada: Mantener una dieta balanceada y nutritiva.",
      Descripcion3: "Ejercicio físico: Realizar actividad física regular para mantener el cuerpo y la mente en forma.",
      Descripcion4: "Higiene del sueño: Asegurar un descanso adecuado mediante buenos hábitos de sueño.",
      Imagen: "/assets/img/IMG-20240616-WA0110.jpg"
    },
    {
      Titulo: "Búsqueda de ayuda:",
      Descripcion1: "Reconocimiento de la necesidad: Identificar cuándo se necesita apoyo o intervención externa.",
      Descripcion2: "Acceso a recursos: Conocer y utilizar los recursos disponibles, como amigos, familiares, profesionales de la salud mental, etc.",
      Descripcion3: "Solicitar ayuda: Ser capaz de pedir ayuda de manera efectiva cuando sea necesario.",
      Imagen: "/assets/img/IMG-20240616-WA0112.jpg"
    }

  ]

  private TemaB =
    {
      Titulo: "¿De qué manera las competencias se desarrollan en las practicas emocionales?",
      Descripcion: "Desarrollar competencias emocionales a través de prácticas emocionales implica implementar estrategias y actividades específicas que ayuden a los individuos a mejorar su comprensión y manejo de las emociones. Aquí se detallan cómo se pueden desarrollar cada una de las competencias emocionales mencionadas por Rafael Bisquerra a través de prácticas concretas:",
      Imagen: "/assets/img/IMG-20240616-WA0115.jpg",
      Conclusion: "Estas prácticas emocionales, cuando se implementan de manera regular y sistemática, pueden ayudar a desarrollar competencias emocionales robustas que contribuyen al bienestar integral y al éxito personal y profesional.",
      Subtemas: [
        "Conciencia emocional.",
        "Regulación emocional.",
        "Autonomía emocional.",
        "Competencias social.",
        "Habilidades para la vida y el bienestar.",
      ]
    }

  private SubtemaB1 = [
    {
      Titulo: "Conciencia Emocional",
      Imagen: "/assets/img/IMG-20240616-WA0117.jpg"
    },
    {
      Titulo: "Conciencia de las propias emociones:",
      Descripcion1: "Diarios emocionales: Llevar un diario donde se registren las emociones experimentadas a lo largo del día, sus causas y cómo se manejaron.",
      Descripcion2: "Meditación de conciencia plena: Practicar mindfulness para aumentar la conciencia del momento presente y de las emociones que surgen en diferentes situaciones.",
      Descripcion3: "Autorreporte emocional: Realizar autoevaluaciones periódicas sobre el estado emocional en diferentes momentos del día.",
      Imagen: "/assets/img/IMG-20240616-WA0118.jpg"
    },
    {
      Titulo: "Conciencia de las emociones de los demás:",
      Descripcion1: "Role-playing: Participar en juegos de rol que simulen diferentes situaciones sociales para practicar la identificación y respuesta a las emociones de los demás.",
      Descripcion2: "Observación empática: Realizar ejercicios donde se observe a los demás y se intente identificar sus emociones basándose en expresiones faciales, lenguaje corporal y tono de voz.",
      Descripcion3: "Debates y discusiones: Facilitar discusiones grupales sobre cómo diferentes situaciones pueden afectar emocionalmente a las personas y fomentar la comprensión y empatía.",
      Imagen: "/assets/img/IMG-20240616-WA0119.jpg"
    }
  ]

  private SubtemaB2 = [
    {
      Titulo: "Regulación Emocional",
      Imagen: "/assets/img/IMG-20240616-WA0120.jpg"
    },
    {
      Titulo: "Gestión de las propias emociones:",
      Descripcion1: "Técnicas de relajación: Enseñar y practicar técnicas como la respiración profunda, la meditación y la relajación muscular progresiva.",
      Descripcion2: "Reestructuración cognitiva: Ayudar a los individuos a identificar y cambiar pensamientos negativos o irracionales que pueden intensificar las emociones negativas.",
      Descripcion3: "Simulación de situaciones: Practicar cómo manejar emocionalmente diferentes situaciones a través de simulaciones y escenarios controlados.",
      Imagen: "/assets/img/IMG-20240616-WA0121.jpg"
    },
    {
      Titulo: "Manejo del estrés:",
      Descripcion1: "Ejercicio físico regular: Fomentar la práctica de ejercicio físico como una forma de reducir el estrés y mejorar el bienestar emocional.",
      Descripcion2: "Tiempo de descanso y autocuidado: Establecer rutinas que incluyan tiempo para el descanso y actividades de autocuidado, como hobbies o tiempo con seres queridos.",
      Descripcion3: "Técnicas de manejo del tiempo: Enseñar habilidades de organización y manejo del tiempo para reducir el estrés asociado con las responsabilidades y plazos.",
      Imagen: "/assets/img/IMG-20240616-WA0122.jpg"
    }
  ]

  private SubtemaB3 = [
    {
      Titulo: "Autonomía Emocional",
      Imagen: "/assets/img/IMG-20240616-WA0123.jpg"
    },
    {
      Titulo: "Autoestima:",
      Descripcion1: "Talleres de autoconocimiento: Realizar talleres y actividades que fomenten la autoexploración y el reconocimiento de fortalezas y áreas de mejora.",
      Descripcion2: "Refuerzo positivo: Fomentar el uso del refuerzo positivo tanto interno como externo, para promover una imagen positiva de uno mismo.",
      Descripcion3: "Actividades de autoafirmación: Realizar ejercicios donde se practiquen afirmaciones positivas sobre uno mismo y sus capacidades.",
      Imagen: "/assets/img/IMG-20240616-WA0123.jpg"
    },
    {
      Titulo: "Automotivación:",
      Descripcion1: "Establecimiento de metas: Ayudar a los individuos a establecer y seguir objetivos personales y profesionales, desglosándolos en metas alcanzables.",
      Descripcion2: "Diarios de gratitud: Mantener un diario donde se anoten cosas por las que se está agradecido, lo cual puede aumentar la motivación y la perspectiva positiva.",
      Descripcion3: "Visualización de logros: Practicar la visualización de objetivos logrados y el impacto positivo de estos logros en la vida personal y profesional.",
      Imagen: "/assets/img/IMG-20240616-WA0124.jpg"
    },
    {
      Titulo: "Resiliencia:",
      Descripcion1: "Narración de historias de superación: Compartir y analizar historias de personas que han superado adversidades para inspirar y enseñar estrategias de resiliencia.",
      Descripcion2: "Técnicas de afrontamiento: Enseñar y practicar técnicas específicas para enfrentar y superar desafíos, como el establecimiento de redes de apoyo y la búsqueda de soluciones creativas.",
      Descripcion3: "Reflexión y aprendizaje: Facilitar sesiones de reflexión sobre experiencias difíciles y los aprendizajes obtenidos de ellas.",
      Imagen: "/assets/img/IMG-20240616-WA0125.jpg"
    }
  ]

  private SubtemaB4 = [
    {
      Titulo: "Competencia Social",
      Imagen: "/assets/img/IMG-20240616-WA0109.jpg"
    },
    {
      Titulo: "Habilidades sociales:",
      Descripcion1: "Talleres de comunicación: Realizar talleres que enseñen habilidades de comunicación efectiva, incluyendo la escucha activa y la expresión asertiva",
      Descripcion2: "Juegos de cooperación: Participar en actividades grupales y juegos que requieran cooperación y trabajo en equipo.",
      Descripcion3: "Resolución de conflictos: Practicar técnicas de resolución de conflictos a través de simulaciones y role-playing.",
      Imagen: "/assets/img/IMG-20240616-WA0109.jpg"
    },
    {
      Titulo: "Empatía:",
      Descripcion1: "Dinámicas de perspectiva: Realizar actividades donde se deba asumir la perspectiva de otra persona para comprender mejor sus emociones y reacciones.",
      Descripcion2: "Actividades de voluntariado: Involucrarse en actividades de voluntariado que fomenten el contacto con diversas realidades y la empatía hacia los demás.",
      Descripcion3: "Historias y narrativas: Leer y discutir historias que exploren las emociones y experiencias de diferentes personajes.",
      Imagen: "/assets/img/IMG-20240616-WA0111.jpg"
    }
  ]

  private SubtemaB5 = [
    {
      Titulo: "Habilidades para la vida y el bienestar",
      Imagen: "/assets/img/IMG-20240616-WA0113.jpg"
    },
    {
      Titulo: "Adopción de hábitos saludables:",
      Descripcion1: "Programas de bienestar: Implementar programas que incluyan actividades físicas, nutrición adecuada y prácticas de higiene del sueño",
      Descripcion2: "Educación en salud: Realizar talleres y sesiones informativas sobre la importancia de los hábitos saludables para el bienestar emocional y físico.",
      Descripcion3: "Rutinas saludables: Ayudar a establecer rutinas diarias que incluyan prácticas de autocuidado y bienestar.",
      Imagen: "/assets/img/IMG-20240616-WA0113.jpg"
    },
    {
      Titulo: "Búsqueda de ayuda:",
      Descripcion1: "Información y recursos: Proveer información sobre recursos de apoyo disponibles, como servicios de consejería, líneas de ayuda y grupos de apoyo.",
      Descripcion2: "Entrenamiento en solicitud de ayuda: Practicar cómo pedir ayuda de manera efectiva a amigos, familiares o profesionales cuando se necesita.",
      Descripcion3: "Redes de apoyo: Fomentar la creación y mantenimiento de redes de apoyo tanto dentro como fuera del entorno educativo o laboral.",
      Imagen: "/assets/img/IMG-20240616-WA0111.jpg"
    }
  ]

  getData(route: string): any {
    switch (route) {
      case 'tema1':
        return this.TemaA;
      case 'Conciencia emocional':
        return this.SubtemaA1;
      case 'Regulación emocional':
        return this.SubtemaA2;
      case 'Autonomía emocional':
        return this.SubtemaA3;
      case 'Competencia Social':
        return this.SubtemaA4;
      case 'Habilidades para la vida y el bienestar':
        return this.SubtemaA5;
      case 'tema2':
        return this.TemaB;
      case 'Conciencia emocional.':
        return this.SubtemaB1;
      case 'Regulación emocional.':
        return this.SubtemaB2;
      case 'Autonomía emocional.':
        return this.SubtemaB3;
      case 'Competencia Social.':
        return this.SubtemaB4;
      case 'Habilidades para la vida y el bienestar.':
        return this.SubtemaB5;
      case 'home':
        return [this.TemaA, this.TemaB];
    }
  }
}
