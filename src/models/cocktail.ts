interface Thumbable {
  strDrinkThumb: string
}
export interface GeneralDrink extends Thumbable {
  idDrink: string
  strDrink: string
}

export interface PropertyType<T> {
  property: keyof T
  isDescending: boolean
}
export interface CocktailFilter<T> {
  property: keyof T
  isTruthySelected: boolean
}

export type FilterSegmentType = 'filter'
export type SearchSegmentType = 'search'

export type SegmentType = FilterSegmentType | SearchSegmentType

export interface SegmentKeyType {
  readonly name: string
  readonly value: string
  readonly label: string
}

export const AlcoholicSegmentKey: SegmentKeyType = {
  label: 'Alcoholic / Nonalcoholic',
  name: 'alcoholic',
  value: 'a',
}
export const IngredientSegmentKey: SegmentKeyType = {
  label: 'Ingredient',
  name: 'ingredient',
  value: 'i',
}
export const FirstLetterSegmentKey: SegmentKeyType = {
  label: 'First Letter',
  name: 'firstLetter',
  value: 'f',
}
export const CategorySegmentKey: SegmentKeyType = {
  label: 'Category',
  name: 'category',
  value: 'c',
}
export const CocktailNameSegmentKey: SegmentKeyType = {
  label: 'Cocktail Name',
  name: 'cocktailName',
  value: 's',
}
export const GlassSegmentKey: SegmentKeyType = {
  label: 'Glass',
  name: 'glass',
  value: 'g',
}

export interface OptionValueType {
  readonly label: string
  readonly value: string
}

export const AlcoholicValue: OptionValueType = {
  label: 'Alcoholic',
  value: 'alcoholic',
}
export const NonAlcoholicValue: OptionValueType = {
  label: 'Non Alcoholic',
  value: 'non_alcoholic',
}
export const OptionalAlcoholValue: OptionValueType = {
  label: 'Optional Alcohol',
  value: 'optional_alcohol',
}

export const AlcoholicFilterOptions = [
  AlcoholicValue,
  NonAlcoholicValue,
  OptionalAlcoholValue,
]

export const OrdinaryDrinkValue: OptionValueType = {
  label: 'Ordinary Drink',
  value: 'Ordinary Drink',
}
export const CocktailValue: OptionValueType = {
  label: 'Cocktail',
  value: 'Cocktail',
}
export const MilkFloatShakeValue: OptionValueType = {
  label: 'Milk / Float / Shake',
  value: 'Milk / Float / Shake',
}
export const OtherUnknownValue: OptionValueType = {
  label: 'Other / Unknown',
  value: 'Other/Unknown',
}
export const CocoaValue: OptionValueType = { label: 'Cocoa', value: 'Cocoa' }
export const ShotValue: OptionValueType = { label: 'Shot', value: 'Shot' }
export const CoffeeTeaValue: OptionValueType = {
  label: 'Coffee / Tea',
  value: 'Coffee / Tea',
}
export const HomemadeLiquerValue: OptionValueType = {
  label: 'Homemade Liqueur',
  value: 'Homemade Liqueur',
}
export const PunchPartyDrinkValue: OptionValueType = {
  label: 'Punch / Party Drink',
  value: 'Punch / Party Drink',
}
export const BeerValue: OptionValueType = { label: 'Beer', value: 'Beer' }
export const SoftDrinkSodaValue: OptionValueType = {
  label: 'Soft Drink / Soda',
  value: 'Soft Drink / Soda',
}

export const CategoryFilterOptions = [
  OrdinaryDrinkValue,
  CocktailValue,
  MilkFloatShakeValue,
  OtherUnknownValue,
  CocoaValue,
  ShotValue,
  CoffeeTeaValue,
  HomemadeLiquerValue,
  PunchPartyDrinkValue,
  BeerValue,
  SoftDrinkSodaValue,
]

export const HighballGlassValue: OptionValueType = {
  label: 'Highball glass',
  value: 'Highball glass',
}
export const CocktailGlassValue: OptionValueType = {
  label: 'Cocktail glass',
  value: 'Cocktail glass',
}
export const OldFashionedGlassValue: OptionValueType = {
  label: 'Old-fashioned glass',
  value: 'Old-fashioned glass',
}
export const WhiskeyGlassValue: OptionValueType = {
  label: 'Whiskey Glass',
  value: 'Whiskey Glass',
}
export const CollinsGlassValue: OptionValueType = {
  label: 'Collins glass',
  value: 'Collins glass',
}
export const PousseCafeGlassValue: OptionValueType = {
  label: 'Pousse cafe glass',
  value: 'Pousse cafe glass',
}
export const ChampagneFluteValue: OptionValueType = {
  label: 'Champagne flute',
  value: 'Champagne flute',
}
export const WhiskeySourGlassValue: OptionValueType = {
  label: 'Whiskey sour glass',
  value: 'Whiskey sour glass',
}
export const CordialGlassValue: OptionValueType = {
  label: 'Cordial glass',
  value: 'Cordial glass',
}
export const BrandySnifterValue: OptionValueType = {
  label: 'Brandy snifter',
  value: 'Brandy snifter',
}
export const WhiteWineGlassValue: OptionValueType = {
  label: 'White wine glass',
  value: 'White wine glass',
}
export const NickAndNorGlassValue: OptionValueType = {
  label: 'Nick and Nora Glass',
  value: 'Nick and Nora Glass',
}
export const HurricaneGlassValue: OptionValueType = {
  label: 'Hurricane glass',
  value: 'Hurricane glass',
}
export const CoffeeMugGlassValue: OptionValueType = {
  label: 'Coffee mug',
  value: 'Coffee mug',
}
export const ShotGlassValue: OptionValueType = {
  label: 'Shot glass',
  value: 'Shot glass',
}
export const JarGlassValue: OptionValueType = { label: 'Jar', value: 'Jar' }
export const IrishCoffeeCupGlassValue: OptionValueType = {
  label: 'Irish coffee cup',
  value: 'Irish coffee cup',
}
export const PunchBowlGlassValue: OptionValueType = {
  label: 'Punch bowl',
  value: 'Punch bowl',
}
export const PitcherGlassValue: OptionValueType = {
  label: 'Pitcher',
  value: 'Pitcher',
}
export const PintGlassValue: OptionValueType = {
  label: 'Pint glass',
  value: 'Pint glass',
}
export const CopperMugGlassValue: OptionValueType = {
  label: 'Copper Mug',
  value: 'Copper Mug',
}
export const WineGlassValue: OptionValueType = {
  label: 'Wine Glass',
  value: 'Wine Glass',
}
export const BeerMugGlassValue: OptionValueType = {
  label: 'Beer mug',
  value: 'Beer mug',
}
export const MargaritaCoupetteGlassValue: OptionValueType = {
  label: 'Margarita/Coupette glass',
  value: 'Margarita/Coupette glass',
}
export const BeerPilsnerGlassValue: OptionValueType = {
  label: 'Beer pilsner',
  value: 'Beer pilsner',
}
export const BeerGlassValue: OptionValueType = {
  label: 'Beer Glass',
  value: 'Beer Glass',
}
export const ParfaitGlassValue: OptionValueType = {
  label: 'Parfait glass',
  value: 'Parfait glass',
}
export const MasonJarGlassValue: OptionValueType = {
  label: 'Mason jar',
  value: 'Mason jar',
}
export const MargaritaGlassValue: OptionValueType = {
  label: 'Margarita glass',
  value: 'Margarita glass',
}
export const MartiniGlassValue: OptionValueType = {
  label: 'Martini Glass',
  value: 'Martini Glass',
}
export const BalloonGlassValue: OptionValueType = {
  label: 'Balloon Glass',
  value: 'Balloon Glass',
}
export const CoupeGlassValue: OptionValueType = {
  label: 'Coupe Glass',
  value: 'Coupe Glass',
}

export const GlassFilterOptions = [
  HighballGlassValue,
  CocktailGlassValue,
  OldFashionedGlassValue,
  WhiskeyGlassValue,
  CollinsGlassValue,
  PousseCafeGlassValue,
  ChampagneFluteValue,
  WhiskeySourGlassValue,
  CordialGlassValue,
  BrandySnifterValue,
  WhiteWineGlassValue,
  NickAndNorGlassValue,
  HurricaneGlassValue,
  CoffeeMugGlassValue,
  ShotGlassValue,
  JarGlassValue,
  IrishCoffeeCupGlassValue,
  PunchBowlGlassValue,
  PitcherGlassValue,
  PintGlassValue,
  CopperMugGlassValue,
  WineGlassValue,
  BeerMugGlassValue,
  MargaritaCoupetteGlassValue,
  BeerPilsnerGlassValue,
  BeerGlassValue,
  ParfaitGlassValue,
  MasonJarGlassValue,
  MargaritaGlassValue,
  MartiniGlassValue,
  BalloonGlassValue,
  CoupeGlassValue,
]

export interface DetailDrink extends GeneralDrink {
  dateModified: string
  idDrink: string
  strAlcoholic: string // "Alcoholic",
  strCategory: string // "Ordinary Drink",
  strCreativeCommonsConfirmed: string // "No",
  strDrink: string // "Tuxedo Cocktail",
  strDrinkAlternate: string | null // null,
  strDrinkThumb: string // "https://www.thecocktaildb.com/images/media/drink/4u0nbl1504352551.jpg",
  strGlass: string // "Cocktail glass",
  strIBA: string // "Unforgettables",
  strImageAttribution: string | null // null,
  strImageSource: string | null // null,
  strIngredient1: string | null // "Dry Vermouth",
  strIngredient2: string | null // "Gin",
  strIngredient3: string | null // "Maraschino liqueur",
  strIngredient4: string | null // "Anis",
  strIngredient5: string | null // "Orange bitters",
  strIngredient6: string | null // "Cherry",
  strIngredient7: string | null // null,
  strIngredient8: string | null // null,
  strIngredient9: string | null // null,
  strIngredient10: string | null // null,
  strIngredient11: string | null // null,
  strIngredient12: string | null // null,
  strIngredient13: string | null // null,
  strIngredient14: string | null // null,
  strIngredient15: string | null // null,
  strInstructions: string | null // "Stir all ingredients with ice and strain into a cocktail glass. Garnish with a cherry and a twist of lemon zest.",
  strInstructionsDE: string | null // "Alle Zutaten mit Eis verrühren und in ein Cocktailglas abseihen. Mit einer Kirsche und einem Schuss Zitrone garnieren.",
  strInstructionsES: string | null // null,
  strInstructionsFR: string | null // null,
  strInstructionsIT: string | null // "Mescolare tutti gli ingredienti con ghiaccio e filtrare in una coppetta da cocktail. Guarnire con una ciliegia e una scorza di limone grattugiata.",
  'strInstructionsZH-HANS': string | null // null,
  'strInstructionsZH-HANT': string | null // null,
  strMeasure1: string | null // "1 1/2 oz ",
  strMeasure2: string | null // "1 1/2 oz ",
  strMeasure3: string | null // "1/4 tsp ",
  strMeasure4: string | null // "1/4 tsp ",
  strMeasure5: string | null // "2 dashes ",
  strMeasure6: string | null // "1 ",
  strMeasure7: string | null // null,
  strMeasure8: string | null // null,
  strMeasure9: string | null // null,
  strMeasure10: string | null // null,
  strMeasure11: string | null // null,
  strMeasure12: string | null // null,
  strMeasure13: string | null // null,
  strMeasure14: string | null // null,
  strMeasure15: string | null // null,
  strTags: string | null // "IBA,Classic",
  strVideo: string | null // "https://www.youtube.com/watch?v=347ZY5eJFU8",
}

export interface ApiRawCocktailData {
  drinks: Array<DetailDrink>
}
