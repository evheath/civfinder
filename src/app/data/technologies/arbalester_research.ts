
import { Technology } from 'src/app/models/technology.model'
import { crossbowman_research } from './crossbowman_research'
export const arbalester_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 400,
    "food": 450,
    "stone": 0
  },
  "name": "arbalester research",
  "age": "imperial",
  "color": "green",
  dependencies: [crossbowman_research.name],
}
