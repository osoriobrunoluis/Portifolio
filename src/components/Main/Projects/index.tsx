import { StyledSectionProjects } from "./style";
import nukenzie from "./assets/Nukenzie.svg";
import kenzieBurguer from "./assets/Hamburgueria.svg";
import cloneGPT from "./assets/CloneGPT.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Projects = () => {
  return (
    <StyledSectionProjects id="projetos">
      <div className="card__title">
        <h2>Projetos</h2>
      </div>
      <div className="card__container">
        <div className="card__image">
          <img className="img" src={nukenzie} alt="Imagem Nukenzie" />
        </div>
        <div className="name__project">
          <h3>Nu kenzie</h3>
        </div>
        <div className="description__project">
          <p>
            Nu Kenzie, onde você pode informar valores de entrada e saída e
            verificar o saldo final para acompanhar suas finanças.
          </p>
        </div>
        <div className="tecs__project">
          <p>
            Tecnologias:<span>JavaScript, React e CSS.</span>
          </p>
        </div>
        <div className="card__links">
          <a 
            href="https://react-entrega-s1-template-nu-kenzie-bl.vercel.app/?vercelToolbarCode=EKp1cQpvXaWLzhF"
            className="link__vercel"
            target="blank"
          >
            <FontAwesomeIcon icon={faLink} /> <p>Link</p>
          </a>
          <a
            href="https://github.com/osoriobrunoluis/NuKenzie"
            className="link__gitHub"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} /> <p>GitHub</p>
          </a>
        </div>
      </div>
      <div className="card__container">
        <div className="card__image">
          <img src={kenzieBurguer} alt="Imagem Kenzie Burguer" />
        </div>
        <div className="name__project">
          <h3>Kenzie Burguer</h3>
        </div>
        <div className="description__project">
          <p>
          Pequeno e-commerce onde é possível adicionar produtos no carrinho e efetuar buscas.
          </p>
        </div>
        <div className="tecs__project">
          <p>
            Tecnologias:<span>JavaScript, React e CSS.</span>{" "}
          </p>
        </div>
        <div className="card__links">
          <a
            href="https://react-entrega-template-hamburgueria-da-kenzie-bl.vercel.app/"
            className="link__vercel"
            target="blank"
          >
            <FontAwesomeIcon icon={faLink} /> <p>Link</p>
          </a>
          <a
            href="https://github.com/osoriobrunoluis/burguerKenzie"
            className="link__gitHub"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} /> <p>GitHub</p>
          </a>
        </div>
      </div>
      <div className="card__container">
        <div className="card__image">
          <img src={cloneGPT} alt="Imagem cloneGPT" />
        </div>
        <div className="name__project">
          <h3>Clone BL-GPT</h3>
        </div>
        <div className="description__project">
          <p>
          Apresento o Clone BL-GPT uma plataforma para fazer perguntas e receber respostas da inteligência artificial da OpenAI.
          </p>
        </div>
        <div className="tecs__project">
          <p>
            Tecnologias:<span>Next, Tailwind, TypeScript, JavaScript e React.</span>
          </p>
        </div>
        <div className="card__links">
          <a
            href="https://clone-bl-i8untv7ze-bruno-luiz.vercel.app/"
            className="link__vercel"
            target="blank"
          >
            <FontAwesomeIcon icon={faLink} /> <p>Link</p>
          </a>
          <a
            href="https://github.com/osoriobrunoluis/cloneBL-GPT"
            className="link__gitHub"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} /> <p>GitHub</p>
          </a>
        </div>
      </div>
    </StyledSectionProjects>
  );
};
