import { sandboxApi } from "./AxiosService.js";
class WeatherService {
  async getWeather() {
    const res = await sandboxApi.get('/weather/')
    let K = res.data.main.temp
    let C = (K - 273.15).toFixed(0)
    let F = ((K - 273.15) * 9 / 5 + 32).toFixed(0);
    console.log(C, F);
    document.getElementById("temp").innerHTML = `${F}° F`

    document.getElementById("temp").onclick = changeTemp

    function changeTemp() {
      let temp = true
      if (temp == true) {
        document.getElementById("temp").innerHTML = `${C}° C`
        temp = false
      } {
        document.getElementById("temp").innerHTML = `${F}° F`
        temp = true
      }

    }
  }

}
export const weatherService = new WeatherService()


