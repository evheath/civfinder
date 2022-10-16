
import { Technology } from 'src/app/models/technology.model'


import { castle } from './castle'
export const spies: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "spies",
  "age": "imperial",
  "color": "green",
  dependencies: [, castle.name]
}
