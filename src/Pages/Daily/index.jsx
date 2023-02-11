import CardDay from "../../components/CardDay";
import { Container } from "./styles";


export default function Daily() {

  return (
    <Container>

      <div className="cards-daily">
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
      </div>

      <div className="cards-secondary">

        <div className="card-today">

          <div className="infos">
            <strong>Jan 29</strong>
            <span>Domingo, 13:05</span>
          </div>

          <div className="temperature">
            <strong>34</strong>
            <strong>Parcialmente nublado</strong>
          </div>
        </div>

        <div className="card-infos-weather">
          <h3>Destaques do tempo</h3>
          <p>Lorem, ipsum dol</p>
        </div>


      </div>

    </Container>
  )
}
