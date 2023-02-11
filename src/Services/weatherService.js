import HttpClient from "./utils/httpClient";

class WeatherService {

  constructor() {

    this.httpClient = new HttpClient(
      'http://api.weatherapi.com/v1/current.json',
      '69cb04bbb38d44fc9b0223722232601'
      )
  }

  getWeather(path){
    return this.httpClient.getWeather(path, {
      headers: {
        'Authorization': 'Gmc',
        'Auth': 'Gabriel Morais'
      }
    });
  }


}

export default new WeatherService;
