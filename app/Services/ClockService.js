import { sandboxApi } from "./AxiosService.js";
class ClockService {
  async getClock() {
    let template = ""
    const now = new Date()
    let Hr = now.getHours()
    let Min = now.getMinutes()
    let num = now.getDate()
    let year = now.getFullYear()

    let day = ""
    switch (now.getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
    }

    let month = ""
    switch (now.getMonth()) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "Febuary";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;

    }


    template = `
    <h1>${Hr}:${Min}</h1>
    <h6>Happy ${day}!</h6>
    <h3>${num} ${month} ${year}</h3>`
    document.getElementById('clock').innerHTML = template
  }
}
export const clockService = new ClockService()