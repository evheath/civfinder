
import { Technology } from 'src/app/models/technology.model'
import { eagle_warrior_research } from './eagle_warrior_research'
export const elite_eagle_warrior_research: Technology = {
  "name": "elite eagle warrior research",
  "age": "imperial",
  "color": "green",
  dependencies: [eagle_warrior_research.name],
}
