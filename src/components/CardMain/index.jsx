import { Container } from "./styles";

import PropTypes from 'prop-types';

export default function CardMain({ temperature, condition }) {

  const dayName = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado-Feira'
  ]

  const monName = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  const date = new Date();

  return(
    <Container>
      <div className="date">
        <strong>{`${date.getDate()} de ${monName[date.getMonth()]}`}</strong>
        <strong>{`${dayName[date.getDay()]}`}</strong>
      </div>

      <div className="temperature">
        {/* <img src={icon} alt="" /> */}
        <h2>{temperature}º</h2>
        <span>{condition}</span>
      </div>
    </Container>
  )
}

CardMain.propTypes = {
  condition: PropTypes.string,
  temperature: PropTypes.string
}
