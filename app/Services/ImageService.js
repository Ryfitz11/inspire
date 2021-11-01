import { sandboxApi } from "./AxiosService.js";

class ImageService {
  async getImage() {

    const res = await sandboxApi.get('/images/')
    let img = res.data.largeImgUrl
    document.getElementById('background').style.backgroundImage = `url('${img}')`;;
    document.getElementById('author').innerText = res.data.author
  }
}
export const imageService = new ImageService()