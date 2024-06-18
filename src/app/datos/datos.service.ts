import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private TemaA1 =
    {
      Titulo: "Bisquerra",
      Descripcion: "Rafael Bisquerra, un destacado experto en educación emocional, ha desarrollado un modelo de competencias emocionales que es ampliamente reconocido y utilizado en el ámbito educativo. Según Bisquerra, las competencias emocionales se dividen en cinco grandes bloques:",
      Imagen: "src/assets/img/IMG-20240616-WA0093",
      Conclusion: "Cada una de estas competencias emocionales juega un papel crucial en el desarrollo integral de la persona, proporcionando herramientas y habilidades para manejar de manera efectiva los desafíos emocionales y sociales que se presentan en la vida cotidiana. La educación emocional, tal como la propone Bisquerra, busca integrar estas competencias en el currículo educativo para fomentar el bienestar y el éxito de los estudiantes tanto a nivel personal como académico y profesional"
    }

  private SubtemaA1 =
    [
      {
        Titulo: "Conciencia emocional",
        Imagen: "src/assets/img/IMG-20240616-WA0093"
      },
      {
        Titulo: "Conciencia de las propias emociones:",
        Descripcion1: "Identificación de emociones: Ser capaz de nombrar y distinguir entre diferentes emociones como la alegría, tristeza, miedo, sorpresa, etc.",
        Descripcion2: "Comprensión de las emociones: Entender las causas y consecuencias de nuestras emociones, cómo se relacionan con nuestros pensamientos y comportamientos.",
        Descripcion3: "Aceptación de las emociones: Reconocer que todas las emociones, tanto positivas como negativas, son válidas y tienen un propósito.",
        Imagen: "src/assets/img/IMG-20240616-WA0094"
      },
      {
        Titulo: "Conciencia de las emociones de los demás:",
        Descripcion1: "Percepción emocional: Detectar las emociones en otras personas a través de señales verbales y no verbales como el tono de voz, expresión facial y lenguaje corporal.",
        Descripcion2: "Empatía emocional: Experimentar y comprender las emociones de los demás, poniéndose en su lugar emocionalmente.",
        Descripcion3: "Sensibilidad interpersonal: Estar atento y responder adecuadamente a las emociones de los demás, lo cual facilita la comunicación y la relación interpersonal.",
        Imagen: "src/assets/img/IMG-20240616-WA0095"
      }
    ]

  private SubtemaA2 = [
    {
      Titulo: "Regulación emocional",
      Imagen: "src/assets/img/IMG-20240616-WA0096"
    },
    {
      Titulo: "Gestión de las propias emociones:",
      Descripcion1: "Control de impulsos: Ser capaz de gestionar las reacciones impulsivas y actuar de manera reflexiva.",
      Descripcion2: "Técnicas de relajación: Uso de técnicas como la respiración profunda, meditación o visualización para calmarse.",
      Descripcion3: "Reevaluación cognitiva: Cambiar la interpretación de una situación para alterar su impacto emocional.",
      Imagen: "src/assets/img/IMG-20240616-WA0097"
    },
    {
      Titulo: "Manejo del estrés:",
      Descripcion1: "Identificación de estresores: Reconocer las fuentes de estrés en la vida diaria.",
      Descripcion2: "Desarrollo de estrategias de afrontamiento: Implementar estrategias prácticas para manejar el estrés, como la organización del tiempo, el establecimiento de prioridades y la búsqueda de apoyo social.",
      Descripcion3: "Autocuidado: Mantener prácticas de autocuidado que ayuden a reducir el estrés y fomentar el bienestar general, como el ejercicio, una dieta saludable y el descanso adecuado.",
      Imagen: "src/assets/img/IMG-20240616-WA0098"
    }
  ]

  private SubtemaA3 = [
    {
      Titulo: "Autonomía emocional",
      Imagen: "src/assets/img/IMG-20240616-WA0100"
    },
    {
      Titulo: "",
      Descripcion1: "Autoconcepto positivo: Tener una imagen positiva y realista de uno mismo y de las propias capacidades.",
      Descripcion2: "Aceptación personal: Aceptarse a uno mismo con todas sus fortalezas y debilidades.",
      Descripcion3: "Valoración positiva: Sentir aprecio y respeto por uno mismo.",
      Imagen: "src/assets/img/IMG-20240616-WA0103"
    },
    {
      Titulo: "Automoticación:",
      Descripcion1: "Establecimiento de metas: Ser capaz de fijar y perseguir objetivos personales y profesionales.",
      Descripcion2: "Persistencia: Mantener la motivación y el esfuerzo frente a los obstáculos y dificultades.",
      Descripcion3: "Optimismo: Tener una actitud positiva hacia el futuro y las propias posibilidades.",
      Imagen: "src/assets/img/IMG-20240616-WA0101"
    },
    {
      Titulo: "Resilencia:",
      Descripcion1: "Adaptabilidad: Capacidad para adaptarse a cambios y circunstancias adversas.",
      Descripcion2: "Fortaleza emocional: Mantener la estabilidad emocional ante la adversidad.",
      Descripcion3: "Aprendizaje de la experiencia: Extraer aprendizajes y crecimiento personal de las experiencias difíciles.",
      Imagen: "src/assets/img/IMG-20240616-WA0102"
    },
  ]

  private SubtemaA4 = [
    {
      Titulo: "Competencias social",
      Imagen: "src/assets/img/IMG-20240616-WA0104"
    },
    {
      Titulo: "Habilidades sociales:",
      Descripcion1: "Comunicación efectiva: Ser capaz de expresarse de manera clara y asertiva, así como escuchar activamente a los demás.",
      Descripcion2: "Cooperación: Trabajar bien en equipo, respetando y valorando las contribuciones de los demás.",
      Descripcion3: "Resolución de conflictos: Gestionar y resolver conflictos de manera constructiva y pacífica.",
      Imagen: "src/assets/img/IMG-20240616-WA0105"
    },
    {
      Titulo: "Empatía:",
      Descripcion1: "Comprensión empática: Captar y entender los sentimientos y perspectivas de los demás.",
      Descripcion2: "Respuesta empática: Responder de manera apropiada a las necesidades y emociones de los demás.",
      Descripcion3: "Fomento de relaciones positivas: Utilizar la empatía para construir y mantener relaciones interpersonales saludables y satisfactorias.",
      Imagen: "src/assets/img/IMG-20240616-WA0106"
    }
  ]

  private SubtemaA5 = [
    {
      Titulo: "Habilidades para la vida y el bienestar",
      Imagen: "src/assets/img/IMG-20240616-WA0108"
    },
    {
      Titulo: "",
      Descripcion1: "Adopción de hábitos saludables.",
      Descripcion2: "Nutrición adecuada: Mantener una dieta balanceada y nutritiva.",
      Descripcion3: "Ejercicio físico: Realizar actividad física regular para mantener el cuerpo y la mente en forma.",
      Descripcion4: "Higiene del sueño: Asegurar un descanso adecuado mediante buenos hábitos de sueño.",
      Imagen: "src/assets/img/IMG-20240616-WA0110"
    },
    {
      Titulo: "Búsqueda de ayuda:",
      Descripcion1: "Reconocimiento de la necesidad: Identificar cuándo se necesita apoyo o intervención externa.",
      Descripcion2: "Acceso a recursos: Conocer y utilizar los recursos disponibles, como amigos, familiares, profesionales de la salud mental, etc.",
      Descripcion3: "Solicitar ayuda: Ser capaz de pedir ayuda de manera efectiva cuando sea necesario.",
      Imagen: "src/assets/img/IMG-20240616-WA0112"
    }

  ]

  private Tema2 =
  {
    Titulo: "¿De qué manera las competencias se desarrollan en las practicas emocionales?",
    Descripcion: "Desarrollar competencias emocionales a través de prácticas emocionales implica implementar estrategias y actividades específicas que ayuden a los individuos a mejorar su comprensión y manejo de las emociones. Aquí se detallan cómo se pueden desarrollar cada una de las competencias emocionales mencionadas por Rafael Bisquerra a través de prácticas concretas:",
    Imagen: "src/assets/img/IMG-20240616-WA0115"
  }


  private homeData = ['Home Item 1', 'Home Item 2', 'Home Item 3'];
  private aboutData = ['About Item 1', 'About Item 2', 'About Item 3'];
  private contactData = ['Contact Item 1', 'Contact Item 2', 'Contact Item 3'];

  getData(route: string): string[] {
    switch (route) {
      case 'about':
        return this.aboutData;
      case 'contact':
        return this.contactData;
      case 'home':
      default:
        return this.homeData;
    }
  }
}
