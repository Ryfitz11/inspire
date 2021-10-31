import { sandboxApi } from "./AxiosService.js";
class WeatherService {
  async getWeather() {
    const res = await sandboxApi.get('/weather/')
    let K = res.data.main.temp
    let C = (K - 273.15).toFixed(2)
    let F = ((K - 273.15) * 9 / 5 + 32).toFixed(2);
    console.log(C, F);


  }
}
export const weatherService = new WeatherService()


