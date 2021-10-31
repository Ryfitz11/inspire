import { ImageController } from "./Controllers/ImageController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


import { QuotesController } from "./Controllers/QuotesController.js";
import { ClockController } from "./Controllers/ClockController.js";


class App {
  todoController = new TodoController();
  imageController = new ImageController()
  weatherController = new WeatherController()


  quoteController = new QuotesController()
  clockController = new ClockController()
}

window["app"] = new App();
