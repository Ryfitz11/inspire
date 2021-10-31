import { imageService } from "../Services/ImageService.js";

export class ImageController {
  constructor() {
    this.getImage()
  }


  async getImage() {
    try {
      await imageService.getImage()
    } catch (error) {
      console.error("bg-image error", error);
    }
  }
}