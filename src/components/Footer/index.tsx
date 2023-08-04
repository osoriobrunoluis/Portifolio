import { faGithub, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterStyled } from "./style";

export const Footer = () => {
  return (
    <FooterStyled id="footer">
      <div className="footer__container">
        <div className="links">
          <a
            href="https://www.linkedin.com/in/bruno-luiz-ozorio/"
            className="btn__linkedin"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <p>Linkedin</p>
          <a
            href="https://github.com/osoriobrunoluis"
            className="btn__gitHub"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <p>GitHub</p>
          <a href="https://api.whatsapp.com/send?phone=27998883828" target="blank">
          <FontAwesomeIcon icon={faWhatsapp}/>
          </a>
          <p>Telefone</p>
        </div>
        <div className="header__logo__name">
          <h1>＜/BL＞</h1>
        </div>
      </div>
    </FooterStyled>
  );
};
