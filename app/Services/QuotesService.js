import { sandboxApi } from "./AxiosService.js";
class QuotesService {
  async getQuotes() {

    const res = await sandboxApi.get('/Quotes/')
    let quote = res.data.content
    let author = res.data.author
    document.getElementById('quote').innerHTML = `<h6 class="quote"><i>"${quote}"</i></h6>
    <p class="hide">-${author}</p>
    `


  }
}
export const quotesService = new QuotesService()
