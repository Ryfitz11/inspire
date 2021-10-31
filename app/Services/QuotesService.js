import { sandboxApi } from "./AxiosService.js";
class QuotesService {
  async getQuotes() {

    const res = await sandboxApi.get('/Quotes/')
    console.log(res.data.content);
    document.getElementById('quote').innerHTML = `        <h6><i>"${res.data.content}"</h6></i> `
  }
}
export const quotesService = new QuotesService()
