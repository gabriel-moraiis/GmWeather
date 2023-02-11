class HttpClient {

  constructor(baseUrl, APIKey){
    this.baseUrl = baseUrl
    this.apiKey = APIKey
  }

  getWeather(path, options) {
    return this.makeRequest(path, {
      method: 'GET',
      headers: options?.headers,
      body: options?.body
    })
  }

  async makeRequest(path, options) {

    const headers = new Headers()

    if(options.body) {
      headers.append('Content-Type', 'application/json');
    }

    if(options.headers){
      Object.entries(options.headers).forEach(([name, value]) => (
        headers.append(name, value)
      ))
    }

      const response = await fetch(`
      ${this.baseUrl}?key=${this.apiKey}&q=${path}&lang=pt
      `, {
        method: options.method,
        body: JSON.stringify(options?.body),
        headers,
      })

      const body = await response.json();

      if(response.ok) {
        return body;
      }

      throw new Error('Houve um erro ao realizar a requisição');


  }

}

export default HttpClient;
