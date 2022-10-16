
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'

export const imperial_age: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "imperial age",
  "age": "imperial",
  "color": "transparent",
  dependencies: [castle_age.name]
}
