import imageHtml from "./assets/imageHtml.svg";
import imageCss from "./assets/imageCss.svg";
import imageJs from "./assets/imageJs.svg";
import imageReact from "./assets/imageReact.svg";
import imageTs from "./assets/imageTs.svg";
import imageRedux from "./assets/imageRedux.svg";
import imageNode from "./assets/imageNode.svg";
import { StyledSection, StyledTecsContainer } from "./style";

export const Tecs = () => {
  return (
    <StyledTecsContainer id="tecnologias" className="tecs__container">
      <StyledSection >
        <div className="tec__name">
          <h2>Tecnologias</h2>
        </div>
        <div className="tecs__div">
          <ul>
            <li>
              <p>HTML</p>
              <div className="tecs__image">
                <div>
                  <img src={imageHtml} alt="HTML" />
                </div>
              </div>
            </li>
            <li>
              <p>CSS</p>
              <div className="tecs__image">
                <div>
                  <img src={imageCss} alt="Css" />
                </div>
              </div>
            </li>
            <li>
              <p>JavaScript</p>
              <div className="tecs__image">
                <div>
                  <img src={imageJs} alt="JavaScript" />
                </div>
              </div>
            </li>
            <li>
              <p>React</p>
              <div className="tecs__image">
                <div>
                  <img src={imageReact} alt="React" />
                </div>
              </div>
            </li>
            <li>
              <p>TypeScript</p>
              <div className="tecs__image">
                <div>
                  <img src={imageTs} alt="TypeScript" />
                </div>
              </div>
            </li>
            <li>
              <p>Redux</p>
              <div className="tecs__image">
                <div>
                  <img src={imageRedux} alt="Redux" />
                </div>
              </div>
            </li>
            <li>
              <p>NodeJS</p>
              <div className="tecs__image">
                <div>
                  <img src={imageNode} alt="NodeJs" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </StyledSection>
    </StyledTecsContainer>
  );
};
