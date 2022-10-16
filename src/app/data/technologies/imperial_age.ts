
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
export const imperial_age: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "imperial age",
  "age": "imperial",
  "color": "transparent",
  dependencies: [castle_age.name]
}
