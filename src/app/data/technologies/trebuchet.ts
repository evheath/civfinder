
import { Technology } from 'src/app/models/technology.model'


import { castle } from './castle'
export const trebuchet: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "trebuchet",
  "age": "imperial",
  "color": "blue",
  dependencies: [castle.name,]
}
