
import { Technology } from 'src/app/models/technology.model'
import { market } from './market'


export const guilds: Technology = {
  cost: {
    "wood": 0,
    "gold": 200,
    "food": 300,
    "stone": 0
  },
  "name": "guilds",
  "age": "imperial",
  "color": "green",
  dependencies: [market.name,]
}
