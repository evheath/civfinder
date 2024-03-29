
import { Technology } from 'src/app/models/technology.model'
import { guard_tower_research } from './guard_tower_research'
export const guard_tower: Technology = {
  cost: {
    "wood": 50,
    "gold": 0,
    "food": 0,
    "stone": 125
  },
  dependencies: [guard_tower_research.name],
  "name": "guard tower",
  "age": "castle",
  "color": "red",
}
