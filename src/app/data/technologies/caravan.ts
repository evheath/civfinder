
import { Technology } from 'src/app/models/technology.model'
import { market } from './market'
import { castle_age } from './castle_age'
export const caravan: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "caravan",
  "age": "castle",
  "color": "green",
  dependencies: [market.name,]
}
