import PropTypes from 'prop-types';
import { Container } from './styles';

import wind from '../../assets/icons/wind.svg';
import getNameCard from '../../Utils/getNameCard';

export default function SecondaryCard({ condition }) {
  const { name, value } = condition

  return (
    <Container>
      {condition[0] === 'wind_kph' && <img src={wind} alt="Velocidade do Vento" />}
      <div className="infos">
        <span>{getNameCard(name)}</span>
        <h2>{value}</h2>
      </div>
    </Container>
  );
}

// SecondaryCard.propTypes = {
//   condition: PropTypes.array.isRequired,
// };
