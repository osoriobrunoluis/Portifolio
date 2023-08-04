import { About } from "./About"
import { Projects } from "./Projects"
import { Tecs } from "./Tecnologias"
import { MainStyled } from "./style"


export const Main = () => {
  return (
    <MainStyled>
    <About/>
    <Tecs/>
    <Projects/>
    </MainStyled>
  )
}
