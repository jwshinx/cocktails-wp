import React from 'react'

import styles from './CocktailLongDetail.module.css'

import { DetailDrink } from '../../models/cocktail'
import CocktailLongDetailInstructions from './CocktailLongDetailInstructions'
import CocktailLongDetailIngredients from './CocktailLongDetailIngredients'
import CocktailDifficulty from '../cocktail-difficulty/CocktailDifficulty'

export default function CocktailLongDetail({
  item,
}: {
  item: DetailDrink
}): JSX.Element {
  return (
    <div className={`container card mb-3 pt-2 pb-2 ${styles['detail-item']}`}>
      <div className="col-12">
        <div className="row">
          <div className="card-header pt-2">
            <h4>{item.strDrink}</h4>
            <span className="badge bg-primary m-1">{item.strCategory}</span>
            <span className="badge bg-secondary m-1">{item.strAlcoholic}</span>
            <span className="badge bg-info m-1">{item.strGlass}</span>
            <CocktailDifficulty item={item} />
          </div>
        </div>
        <div className={`row ${styles.description}`}>
          <span>ID: {item.idDrink}</span>
          <span>IBA: {item.strIBA}</span>
          <span>Tags: {item.strTags}</span>
          <CocktailLongDetailInstructions item={item} />
          <CocktailLongDetailIngredients item={item} />
        </div>
      </div>
    </div>
  )
}
