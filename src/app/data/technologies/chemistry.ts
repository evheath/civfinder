
import { Technology } from 'src/app/models/technology.model'


import { university } from './university'
export const chemistry: Technology = {
  cost: {
    "wood": 0,
    "gold": 200,
    "food": 300,
    "stone": 0
  },
  "name": "chemistry",
  "age": "imperial",
  "color": "green",
  dependencies: [, university.name]
}
