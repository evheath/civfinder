
import { Technology } from 'src/app/models/technology.model'
import { siege_workshop } from './siege_workshop'
export const battering_ram: Technology = {
  "name": "battering ram",
  "age": "castle",
  "color": "blue",
  dependencies: [siege_workshop.name]
}
