
import { Technology } from 'src/app/models/technology.model'
import { wheelbarrow } from './wheelbarrow'

export const hand_cart: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  dependencies: [wheelbarrow.name,],
  "name": "hand cart",
  "age": "castle",
  "color": "green",
}
