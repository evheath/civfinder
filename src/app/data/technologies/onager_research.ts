
import { Technology } from 'src/app/models/technology.model'
import { siege_workshop } from './siege_workshop'
export const onager_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 500,
    "food": 800,
    "stone": 0
  },
  "name": "onager research",
  "age": "imperial",
  "color": "green",
  dependencies: [siege_workshop.name],
}
