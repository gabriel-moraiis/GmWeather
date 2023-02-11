import { Container } from "./styles";


export default function CardDay() {

  return(
    <Container>
      <div className="infos">
        <h3>Segunda-feira</h3>
        <span>30/01</span>
      </div>

      <div className="temperature">
        <span>icone</span>
        <strong>34</strong>
      </div>
    </Container>
  )
}
