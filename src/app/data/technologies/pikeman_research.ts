
import { Technology } from 'src/app/models/technology.model'
import { barracks } from './barracks'

export const pikeman_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 90,
    "food": 215,
    "stone": 0
  },
  "name": "pikeman research",
  "age": "castle",
  "color": "green",
  dependencies: [barracks.name,],
}
