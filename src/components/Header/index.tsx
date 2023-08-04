import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { StyledHeader, ToggleIcon } from "./style";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledHeader>
      <div className="container">
         <div className="header__logo__name">
        <h1 className="logo">＜BL＞</h1>
        <p>BRUNO LUIS</p>
      </div>
      <nav className={menuOpen ? "open" : "close"}>
        <ul>
          <li>
            <a href="#sobre">Sobre</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#projetos">Projetos</a>
            <a href="#footer">Contato</a>
          </li>
        </ul>
      </nav>
      <ToggleIcon onClick={handleToggleMenu}>
        <FontAwesomeIcon
          className={menuOpen ? "times-icon" : "bars-icon"}
          icon={menuOpen ? faTimes : faBars}
        />
      </ToggleIcon>
      </div>
     
    </StyledHeader>
  );
};
