import { GeneralDrink } from '../models/cocktail'

class BaseDrink {
  idDrink: string
  strDrink: string
  strDrinkThumb: string

  constructor(item: GeneralDrink) {
    this.strDrinkThumb = item.strDrinkThumb
    this.idDrink = item.idDrink
    this.strDrink = item.strDrink
  }

  getImageUrl(): string {
    return this.strDrinkThumb
  }

  getSummary(): string {
    return `${this.idDrink}: ${this.strDrink}`
  }

  getInfo(): Array<string> {
    return [this.idDrink, this.strDrink]
  }
}

export default BaseDrink
