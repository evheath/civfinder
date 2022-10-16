
import { Technology } from 'src/app/models/technology.model'
import { bombard_tower_research } from './bombard_tower_research'
export const bombard_tower: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "bombard tower",
  "age": "imperial",
  "color": "red",
  dependencies: [bombard_tower_research.name]
}
