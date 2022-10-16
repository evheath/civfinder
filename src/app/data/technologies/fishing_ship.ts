
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'
export const fishing_ship: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "fishing ship",
  "age": "dark",
  "color": "blue",
  dependencies: [dock.name]
}
