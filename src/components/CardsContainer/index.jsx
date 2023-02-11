import { useCallback, useEffect, useState } from "react";
import CardMain from "../CardMain";
import SecondaryCard from "../SecondaryCard";
import { Container, SecondaryCardsContainer } from "./styles";

import weatherService from "../../Services/weatherService";

export default function CardsContainer() {

  const [conditions, setConditions] = useState([])

  const getWeather = useCallback(async () => {
    try {
      const { current } = await weatherService.getWeather('Maringá')

      const infos = Object.entries(current)

      const infosCards = [
        'wind_kph', 'pressure_mb',
        'humidity', 'uv', 'feelslike_c',
        "precip_mm", "temp_c", "condition"
      ]

      const infosUtils = infos.filter(info => infosCards.includes(info[0]))
        .map(info => {
          return {
            name: info[0],
            value: info[1]
          }
        })
      setConditions(infosUtils)
    } catch (error) {
      console.log(error);
    }
  }, [])

  useEffect(() => {
    getWeather();
  }, [])

  return (
    <Container>
      <CardMain
      />
      <SecondaryCardsContainer>
        {console.log(conditions.filter(({ name }) => name != 'temp_c' || name != 'condition'))
        // .map(condition => (
        //   <SecondaryCard
        //   key={Math.random()}
        //   condition={condition}
        //   />
        // ))
        }
      </SecondaryCardsContainer>
    </Container>
  )
}
