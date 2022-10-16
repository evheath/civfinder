
import { Technology } from 'src/app/models/technology.model'
import { cannon_galleon_research } from './cannon_galleon_research'
export const elite_cannon_galleon_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "elite cannon galleon research",
  "age": "imperial",
  "color": "green",
  dependencies: [cannon_galleon_research.name],
}
