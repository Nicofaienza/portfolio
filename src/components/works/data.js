import aerolabImg from "../../images/aerolab-img.png";
import landingCVimg from "../../images/landing-cv.png";
import mvConstructoraImg from "../../images/mv-constructora-img.png";
import pomodoroImg from "../../images/pomodoro-img.png";
import portfolioImg from "../../images/portfolio-img.png";
import mlImg from "../../images/ml-img.png";

const data = [
  {
    id: 3,
    name: "Clon de Mercado Libre",
    img: mlImg,
    linkDeploy: "https://nicofaienza.github.io/ml-clon/",
    linkRepo: "https://github.com/Nicofaienza/ml-clon",
    stack: ["HTML", "CSS", "TypeScript", "ReactJS"],
    description: "",
  },
  {
    id: 2,
    name: "CV Landing Page",
    img: landingCVimg,
    linkDeploy: "http://www.nicolasfaienza.me/",
    linkRepo: "https://github.com/Nicofaienza/CV-landing-page",
    stack: ["HTML", "CSS", "TypeScript", "ReactJS"],
    description: "",
  },
  {
    id: 0,
    name: "Aerolab Challenge",
    img: aerolabImg,
    linkDeploy: "https://nicofaienza.github.io/aerolab-challenge/",
    linkRepo: "https://github.com/Nicofaienza/aerolab-challenge",
    stack: ["HTML", "CSS", "JavaScript", "ReactJS"],
    description:
      "Un e-commerce propuesto por la empresa Aerolab con un sistema de dinero ficticio en el cual se pueden adquirir distintos productos provenientes de una API. Consta de un header donde se puede observar el dinero ficticio del usuario, agregar dinero a la cuenta y ver el historial de compras. Debajo podemos ver las páginas de los productos con un sistema de filtros. Fue realizada con React Js, styled-components, react-intersection-observer y react-icons",
  },
  {
    id: 1,
    name: "MV Constructora",
    img: mvConstructoraImg,
    linkDeploy: "https://nicofaienza.github.io/mv-constructora/",
    linkRepo: "https://github.com/Nicofaienza/mv-constructora",
    stack: ["HTML", "CSS", "JavaScript", "ReactJS"],
    description:
      "Página de producto realizada para un cliente real en equipo con un desarrollador más. ",
  },

  {
    id: 4,
    name: "Pomodoro Timer",
    img: pomodoroImg,
    linkDeploy: "https://nicofaienza.github.io/pomodoro.github.io/",
    linkRepo: "https://github.com/Nicofaienza/pomodoro.github.io",
    stack: ["HTML", "CSS", "JavaScript", "ReactJS"],
    description: "",
  },
  {
    id: 5,
    name: "Portfolio",
    img: portfolioImg,
    linkDeploy: "https://nicofaienza.github.io/portfolio/",
    linkRepo: "https://github.com/Nicofaienza/portfolio",
    stack: ["HTML", "CSS", "JavaScript", "ReactJS"],
    description: "",
  },
];

export default data;
