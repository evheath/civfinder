
import { Technology } from 'src/app/models/technology.model'
import { war_galley_research } from './war_galley_research'
export const war_galley: Technology = {
  "name": "war galley",
  "age": "castle",
  "color": "blue",
  dependencies: [war_galley_research.name,]
}
