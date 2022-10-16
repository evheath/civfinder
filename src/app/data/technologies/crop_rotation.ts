
import { Technology } from 'src/app/models/technology.model'
import { heavy_plow } from './heavy_plow'


export const crop_rotation: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "crop rotation",
  "age": "imperial",
  "color": "green",
  dependencies: [heavy_plow.name,]
}
