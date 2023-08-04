import { StyledSection } from "./style";
import svgImage from "./assets/Perfil.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const About = () => {
  return (
    <StyledSection id="sobre">
      <div className="about__container">
        <div className="about__text__dev">
          <p className="text__regular">
            Olá, eu sou o <span className="span__name"> Bruno,</span>
            <span className="text__regular"> um</span>
            <span className="span__info"> Criativo</span>
          </p>
          <p className="span__info">Desenvolvedor</p>
          <p className="span__info">Front-End</p>
        </div>
        <div className="about__text__info">
          <p>
            Desenvolvedor Front-end Formado pela Kenzie Academy. Sou um
            desenvolvedor front-end apaixonado por transformar conceitos
            criativos em experiências digitais interativas e funcionais.
          </p>
          <div className="btn__links">
              <button className="btn__color--primary">
                <a
                  href="mailto:osorio.brunoluis@gmail.com"
                  target="blank"
                  className="btn__color--primary"
                >
                  Entre em Contato
                </a>
              </button>
            <div className="links">
              <a
                href="https://www.linkedin.com/in/bruno-luiz-ozorio/"
                className="btn__linkedin"
                target="blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/osoriobrunoluis"
                className="btn__gitHub"
                target="blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="picture__container">
        <img src={svgImage} alt="Foto de Perfil" />
      </div>
    </StyledSection>
  );
};


