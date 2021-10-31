import { quotesService } from "../Services/QuotesService.js";

export class QuotesController {
  constructor() {
    this.getQuotes()
  }
  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      console.error("Quotes error", error);
    }
  }
}