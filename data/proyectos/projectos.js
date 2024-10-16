import calculatorDark from "../../public/images/calculadoradark.webp";
import cloneChatgpt from "../../public/images/cloneChatGPT.webp";
import simbionteSpiderman from "../../public/images/comic1.png";
import comic2 from "../../public/images/comic2.png";
import comic3 from "../../public/images/comic3.png";
import tarjeta from "../../public/images/tarjeta.webp";
import parallaxLanding from "../../public/images/parallax.webp";

const proyectos = [
  {
    titulo: "SIMBIONTE SPIDER-MAN N.03",
    price: "$21.870",
    imagen: simbionteSpiderman,
    description:
      "Sé testigo de uno de los primeros intentos del Rey de Negro por darle vida a la oscuridad de la inexistencia!",
    url: "/portafolio/calculadora",
  },  {
    titulo: "AMAZING SPIDER-MAN N. 13",
    price: "$44.470",
    imagen: comic2,
    description:
      "Sé testigo de uno de los primeros intentos del Rey de Negro por darle vida a la oscuridad de la inexistencia!",
    url: "/portafolio/calculadora",
  },
  {
    titulo: "SPIDER-VERSE (MARVEL-VERSE) N.02",
    price: "$28.470",
    imagen: comic3,
    description:
      "¡El multiverso como nunca lo experimentaste! El amigable vecino lanza redes se lanza directo a aventuras con sus equivalentes de otras realidades… ¡diversión asegurada!",
    url: "/portafolio/calculadora",
  },
  {
    titulo: "Tarjeta Animada con estilo Glasmorfismo",
    imagen: tarjeta,
    description:
      "Tarjeta interactiva hecha con css para venta de zapatos, cambia de color dependiendo el zapato que elijan.",
    url: "/portafolio/sneakersCards",
  },
  {
    titulo: "Landing page con efecto parallax",
    imagen: parallaxLanding,
    description:
      "Landing page diseñada con un efecto moderno de parallax que se forma con unas ilustraciones de un barrancon en un desierto en la noche.",
    url: "/portafolio/calculadora",
  },
  {
    titulo: "Calculadora en React Native",
    imagen: calculatorDark,
    description:
      "Calculadora desarrollada en React Native, con un diseño moderno y un modo oscuro para mejorar la experiencia del usuario al realizar operaciones matemáticas básicas.",
    url: "/portafolio/calculadora",
  },
  {
    titulo: "Clon de ChatGpt con Next.js",
    imagen: cloneChatgpt,
    description:
      "Clon de ChatGPT creado con Next.js y Tailwind CSS, que permite interactuar con un chatbot generador de respuestas a través de la API de GPT-3 de OpenAI",
    url: "/portafolio/clonechatgpt",
  },
];

export default proyectos;
