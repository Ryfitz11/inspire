import { weatherService } from "../Services/WeatherService.js";

export class WeatherController {
  constructor() {
    this.getWeather()
  }
  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error("weather error", error);
    }
  }
}