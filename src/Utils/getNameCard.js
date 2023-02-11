export default function getNameCard(name) {
  switch(name) {
    case 'wind_kph':
      return 'Velocidade do Vento';
    case 'pressure_mb':
      return 'Pressão';
    case 'humidity':
      return 'Umidade';
    case 'uv':
      return 'UV';
    case 'feelslike_c':
      return 'Sensação Térmica';
    case 'precip_mm':
      return 'Precipitação';
    }
}
