import _ from 'lodash'

import BaseDrink from '../models/BaseDrink'
import { DetailDrink } from './cocktail'

class FullDrink extends BaseDrink {
  ingredientCount: number
  allIngredients: Array<string>

  constructor(item: DetailDrink) {
    super(item)
    this.ingredientCount = 0

    this.strDrinkThumb = item.strDrinkThumb
    this.idDrink = item.idDrink
    this.strDrink = item.strDrink

    this.allIngredients = []
    if (item.strIngredient1) {
      this.allIngredients.push(item.strIngredient1)
    }
    if (item.strIngredient2) {
      this.allIngredients.push(item.strIngredient2)
    }
    if (item.strIngredient3) {
      this.allIngredients.push(item.strIngredient3)
    }
    if (item.strIngredient4) {
      this.allIngredients.push(item.strIngredient4)
    }
    if (item.strIngredient5) {
      this.allIngredients.push(item.strIngredient5)
    }
    if (item.strIngredient6) {
      this.allIngredients.push(item.strIngredient6)
    }
    if (item.strIngredient7) {
      this.allIngredients.push(item.strIngredient7)
    }
    if (item.strIngredient8) {
      this.allIngredients.push(item.strIngredient8)
    }
    if (item.strIngredient9) {
      this.allIngredients.push(item.strIngredient9)
    }
    if (item.strIngredient10) {
      this.allIngredients.push(item.strIngredient10)
    }
    if (item.strIngredient11) {
      this.allIngredients.push(item.strIngredient11)
    }
    if (item.strIngredient12) {
      this.allIngredients.push(item.strIngredient12)
    }
    if (item.strIngredient13) {
      this.allIngredients.push(item.strIngredient13)
    }
    if (item.strIngredient14) {
      this.allIngredients.push(item.strIngredient14)
    }
    if (item.strIngredient15) {
      this.allIngredients.push(item.strIngredient15)
    }
  }

  getList(): string {
    return _.join(this.allIngredients, ', ')
  }

  getDifficulty(): string {
    if (this.allIngredients.length < 4) {
      return 'Easy'
    } else if (
      this.allIngredients.length === 4 ||
      this.allIngredients.length === 5
    ) {
      return 'Moderate'
    } else {
      return 'Difficult'
    }
  }
}

export default FullDrink
