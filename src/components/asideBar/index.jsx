import { Container, InputContainer, Line, MenuContainer } from "./styles";

import searchIcon from '../../assets/icons/search.svg';
import { Link } from "react-router-dom";

export default function AsideBar() {

  return (
    <Container>
      <div className="logo">
        <strong>GM</strong>
        <span>Weather</span>
      </div>

      <InputContainer>
        <input type="text" placeholder="Procurar um lugar..." />
        <img src={searchIcon} alt="Search Icon" />
      </InputContainer>

      <MenuContainer>
        <h2>Maringá</h2>
        <Line />
        <ul className="menu">
          <Link to='/'>
            <li>Hoje</li>
          </Link>
          <Link to='/daily'>
            <li>Diariamente</li>
          </Link>
          <li>Por mês</li>
        </ul>
      </MenuContainer>
    </Container>
  )
}
