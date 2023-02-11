import { Container } from "./styles";

import whatsapp from '../../assets/icons/whatsapp.svg';
import linkedin from '../../assets/icons/linkedin.svg';

export default function Footer() {

  return (
    <Container>
      <h4>Developed by Gabriel Morais</h4>
      <div className="icons">
        <a
        href="https://api.whatsapp.com/send?phone=5544991540389"
        target='_blank'
        >
          <img src={whatsapp} alt="whatsapp icon" />
        </a>
        <a
        href="https://www.linkedin.com/in/gabriel-morais-da-costa-a57b92223/"
        target='_blank'
        >
          <img src={linkedin} alt="linkedin icon" />
        </a>
      </div>
    </Container>
  )
}
