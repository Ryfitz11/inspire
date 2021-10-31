import { clockService } from "../Services/ClockService.js";

export class ClockController {
  constructor() {
    this.getClock()
  }
  async getClock() {
    try {
      await clockService.getClock()
    } catch (error) {
      console.error("clock error", error);
    }
  }
}